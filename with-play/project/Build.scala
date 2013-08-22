import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName         = "with-play"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
  )

  val main = play.Project(appName, appVersion, appDependencies)

  .settings(
    playOnStarted <+= baseDirectory { _ =>
      { _: java.net.InetSocketAddress => System.setProperty("GIT_TAG", ("git describe --always" !!)); () }
    }
  )

  .settings(
    sourceGenerators in Compile <+= (version, sourceManaged in Compile).map {
      case (gitVersion, sources) =>
        val file = sources / "AppSettings.scala"
        IO.write(file, """package global { trait AppSettings { val GIT_TAG = "%s" } }""".format(gitVersion))
        Seq(file)
    }
  )
}
