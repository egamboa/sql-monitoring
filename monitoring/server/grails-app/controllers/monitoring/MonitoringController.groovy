package monitoring

import grails.rest.*
import grails.converters.JSON

class MonitoringController {
	static responseFormats = ['json', 'xml']
    def monitoringService
	
    def index() {
        def result;
        switch(params.type) {
            case 'sga':
                result = monitoringService.getSga()
            break
            case 'sqls':
                result = monitoringService.getSqls()
            break
            case 'ts':
                result = monitoringService.getTablespaces()
            break
            case 'getts':
                result = monitoringService.getTablespace(params.ts)
            break
        }
        render result as JSON
    }
}
