package monitoring

import grails.rest.*
import grails.converters.*
import groovy.sql.Sql;

class MonitoringController {
	static responseFormats = ['json', 'xml']
    def dataSource
	
    def index() {
        final Sql sql = new Sql(dataSource)
        def row1 = sql.rows("SELECT * FROM v\$sgainfo WHERE name = \'Maximum SGA Size\' OR name = \'Free SGA Memory Available\'")
        render row1 as JSON
    }
}
