package global

object App extends AppSettings {
  lazy val version: String = {
    val maybeFromProp = Option(System.getProperty("GIT_TAG"))
    val maybeFromEnv = Option(System.getenv("GIT_TAG"))
    (maybeFromProp orElse maybeFromEnv). getOrElse(GIT_TAG).trim
  }
  lazy val isProd = play.api.Play.current.mode == play.api.Mode.Prod
}
