package global

object App {
  val version = "abcd"

  def isProd = play.api.Play.current.mode == play.api.Mode.Prod
}
