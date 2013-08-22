package views.html.utils

object `package` {

  def Asset(file: String) = controllers.routes.Application.asset(global.App.version, file)

  def staticAsset(file: String) = controllers.routes.Application.asset("xxxxxx", file)
}
