package monitoring
import groovy.sql.Sql
import grails.gorm.transactions.Transactional

@Transactional
class MonitoringService {
    def dataSource

    def getSga () {
        final Sql sql = new Sql(dataSource)
        def row1 = sql.rows("SELECT * FROM v\$sgainfo WHERE name = \'Maximum SGA Size\'")
        def row2 = sql.rows("SELECT sum(bytes) \"current\" FROM v\$sgastat WHERE name!=\'free memory\'")
        row1.addAll(row2)
        return row1
    }

    def getSqls () {
        final Sql sql = new Sql(dataSource)
        def row1 = sql.rows("SELECT sess.username, sql_text FROM v\$sqlarea sqlarea, v\$session sess WHERE sess.sql_hash_value = sqlarea.hash_value  AND sess.sql_address = sqlarea.address AND sess.username IS NOT NULL AND sess.status =\'ACTIVE\'")
        def row2 = sql.rows("SELECT s.username, d.object_name FROM dba_objects d, v\$session s WHERE d.object_id = s.plsql_entry_object_id AND s.status = \'ACTIVE\'")
        row1.addAll(row2)
        return row1
    }

    def getTablespaces () {
        final Sql sql = new Sql(dataSource)
        def row1 = sql.rows("SELECT df.tablespace_name AS \"tablespace\", df.bytes / (1024 * 1024) AS \"max_size\", fs.bytes / (1024 * 1024) AS \"free\" FROM ( SELECT tablespace_name, Sum(bytes) AS bytes FROM dba_free_space GROUP BY tablespace_name) fs,( SELECT tablespace_name ,SUM(bytes) AS bytes FROM dba_data_files GROUP BY tablespace_name ) df WHERE fs.tablespace_name = df.tablespace_name ORDER BY 3 DESC")
        row1 = row1.collect{
            def row2 = sql.rows("SELECT Sum(VSIZE(user_tab_columns.column_name)) Sumatoria FROM DBA_TABLESPACES INNER JOIN dba_tables ON dba_tablespaces.TABLESPACE_NAME = dba_tables.TABLESPACE_NAME INNER JOIN user_tab_columns ON dba_tables.table_name = user_tab_columns.table_name WHERE dba_tablespaces.TABLESPACE_NAME = \'" + it.tablespace + "\'")
            it << row2[0]
            it
        }
        return row1
    }

    def getTablespace (ts) {
        final Sql sql = new Sql(dataSource)
        def row1 = sql.rows("SELECT * FROM dba_data_files WHERE tablespace_name=\'" + ts + "\'")
        return row1
    }
}
