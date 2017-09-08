package monitoring

import grails.rest.*
import grails.converters.*

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
        }
        render result as JSON
    }
}
