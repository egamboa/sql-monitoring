package monitoring
import groovy.sql.Sql
import grails.gorm.transactions.Transactional

@Transactional
class MonitoringService {
    def dataSource

    def getSga() {
        final Sql sql = new Sql(dataSource)
        def row1 = sql.rows("SELECT * FROM v\$sgainfo WHERE name = \'Maximum SGA Size\'")
        def row2 = sql.rows("SELECT sum(bytes) \"current\" FROM v\$sgastat WHERE name!=\'free memory\'")
        row1.addAll(row2)
        return row1;
    }

    def getSqls() {
        final Sql sql = new Sql(dataSource)
        def row1 = sql.rows("SELECT sess.username, sql_text FROM v\$sqlarea sqlarea, v\$session sess WHERE sess.sql_hash_value = sqlarea.hash_value  AND sess.sql_address = sqlarea.address AND sess.username IS NOT NULL AND sess.status =\'ACTIVE\'")
        def row2 = sql.rows("SELECT s.username, d.object_name FROM dba_objects d, v\$session s WHERE d.object_id = s.plsql_entry_object_id AND s.status = \'ACTIVE\'")
        row1.addAll(row2)
        return row1;
    }
}
