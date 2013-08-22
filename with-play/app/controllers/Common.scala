package controllers

import play.api.http.HeaderNames.CACHE_CONTROL

trait Common {

  val CacheForever = (CACHE_CONTROL -> "max-age=315360000")
}
