package views.html.utils

import play.api.templates.Html
import play.api.mvc.{ Call, RequestHeader }

object `package` {

  def Asset(file: String) = controllers.routes.Application.asset(global.App.version, file)

  def staticAsset(file: String) = controllers.routes.Application.asset("xxxxxx", file)

  def scriptTag(devUrl: Call, prodUrl: Call)(implicit request: RequestHeader) =
    if(global.App.isProd) {
      Html(s"""<script src="${prodUrl.absoluteURL()}" type="text/javascript"></script>""" )
    } else {
      Html(s"""<script src="${devUrl.absoluteURL()}" type="text/javascript"></script>""" )
    }

  def linkTag(devUrl: Call, prodUrl: Call)(implicit request: RequestHeader) =
    if(global.App.isProd) {
      Html(s"""<link rel="stylesheet" media="screen" href="${prodUrl.absoluteURL()}">""" )
    } else {
      Html(s"""<link rel="stylesheet" media="screen" href="${devUrl.absoluteURL()}">""" )
    }
}
