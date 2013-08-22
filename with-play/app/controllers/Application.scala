package controllers

import play.api._
import play.api.mvc._

object Application extends Controller with Common {
  
  def index = Action {
    Ok(views.html.index())
  }

  def asset(version: String, file: String) = Action { request =>
    Assets.at(path = "/public", file)(request) match {
      case result if version == "HEAD" || Play.mode(Play.current) == Mode.Dev => result
      case result => result.withHeaders(CacheForever)
    }
  }
}
