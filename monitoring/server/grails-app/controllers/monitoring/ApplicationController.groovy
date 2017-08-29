package monitoring

import grails.core.GrailsApplication
import grails.util.Environment
import grails.plugins.*

class ApplicationController implements PluginManagerAware {

    GrailsApplication grailsApplication
    GrailsPluginManager pluginManager

    def index() {
        println grailsApplication
        [grailsApplication: grailsApplication, pluginManager: pluginManager]
    }
}
