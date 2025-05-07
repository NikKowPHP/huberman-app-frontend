This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed, line numbers have been added.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Line numbers have been added to the beginning of each line
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
__tests__/
  App.test.tsx
android/
  app/
    src/
      debug/
        AndroidManifest.xml
      main/
        java/
          com/
            hubermanappfrontend/
              MainActivity.kt
              MainApplication.kt
        res/
          drawable/
            rn_edit_text_material.xml
          values/
            strings.xml
            styles.xml
        AndroidManifest.xml
    build.gradle
    google-services.json
    proguard-rules.pro
  gradle/
    wrapper/
      gradle-wrapper.properties
  build.gradle
  gradle.properties
  gradlew
  gradlew.bat
  settings.gradle
app_documentation/
   complex_workflows.md
  api_design_documentation.md
  app_description.md
  architecture_pan.md
  backend_implementation_todo.md
  component_breakdown.md
  component_interfaces_interactions.md
  content_strategy_management.md
  database_migrations_plan.md
  database_plan.md
  detailed_plan.md
  frontend_implementation_todo.md
  infrastructure_devops_details.md
  openapi_backend.yaml
  refinement_todo.md
  route_refactor_todo.md
  security_plan.md
  technology_versions_libraries.md
  testing_strategy.md
  TODO.md
  ui_ux_handoff_integration.md
  user_stories_mvp.md
ios/
  hubermanAppFrontend/
    Images.xcassets/
      AppIcon.appiconset/
        Contents.json
      Contents.json
    AppDelegate.swift
    Info.plist
    LaunchScreen.storyboard
    PrivacyInfo.xcprivacy
  hubermanAppFrontend.xcodeproj/
    xcshareddata/
      xcschemes/
        hubermanAppFrontend.xcscheme
    project.pbxproj
  .xcode.env
  Podfile
public/
  index.html
src/
  components/
    Button/
      Button.test.tsx
      Button.tsx
    Card.test.tsx
    Card.tsx
    TextInput.test.tsx
    TextInput.tsx
    UpgradePrompt.test.tsx
    UpgradePrompt.tsx
  navigation/
    AppStack.d.ts
    AppStack.tsx
    AuthStack.d.ts
    AuthStack.tsx
    RootNavigator.d.ts
    RootNavigator.tsx
  screens/
    Notes/
      NotesScreen.test.tsx
      NotesScreen.tsx
    Protocols/
      ProtocolDetailScreen.tsx
      ProtocolListScreen.test.tsx
      ProtocolListScreen.tsx
    Reminders/
      CreateEditReminderScreen.test.tsx
      CreateEditReminderScreen.tsx
      ReminderListScreen.test.tsx
      ReminderListScreen.tsx
    Settings/
      SettingsScreen.test.tsx
      SettingsScreen.tsx
    ForgotPasswordScreen.test.tsx
    ForgotPasswordScreen.tsx
    HomeScreen.test.tsx
    HomeScreen.tsx
    LoginScreen.test.tsx
    LoginScreen.tsx
    PremiumScreen.test.tsx
    PremiumScreen.tsx
    RegisterScreen.test.tsx
    RegisterScreen.tsx
    SignupScreen.test.tsx
    SignupScreen.tsx
  services/
    api/
      auth.ts
      billing.ts
      content.ts
      notes.ts
      reminders.ts
      user.ts
  store/
    authStore.ts
    billingStore.ts
  theme/
    theme.ts
    ThemeProvider.tsx
  types/
    billing.ts
    note.ts
  App.tsx
  config.ts
.clinerules
.env.local
.env.production
.env.staging
.eslintrc.js
.gitignore
.prettierrc.js
.watchmanconfig
app.json
App.tsx
babel.config.js
Gemfile
index.js
index.web.js
jest.config.js
jest.setup.js
metro.config.js
package.json
README.md
repomix.config.json
tsconfig.json
webpack.config.js
```

# Files

## File: __tests__/App.test.tsx
````typescript
1: import React from 'react';
2: import ReactTestRenderer from 'react-test-renderer';
3: import App from '../App';
4: test('renders correctly', async () => {
5:   await ReactTestRenderer.act(() => {
6:     ReactTestRenderer.create(<App />);
7:   });
8: });
````

## File: android/app/src/debug/AndroidManifest.xml
````xml
1: <?xml version="1.0" encoding="utf-8"?>
2: <manifest xmlns:android="http://schemas.android.com/apk/res/android"
3:     xmlns:tools="http://schemas.android.com/tools">
4:     <application
5:         android:usesCleartextTraffic="true"
6:         tools:targetApi="28"
7:         tools:ignore="GoogleAppIndexingWarning"/>
8: </manifest>
````

## File: android/app/src/main/java/com/hubermanappfrontend/MainActivity.kt
````kotlin
 1: package com.hubermanappfrontend
 2: import com.facebook.react.ReactActivity
 3: import com.facebook.react.ReactActivityDelegate
 4: import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
 5: import com.facebook.react.defaults.DefaultReactActivityDelegate
 6: class MainActivity : ReactActivity() {
 7:   override fun getMainComponentName(): String = "hubermanAppFrontend"
 8:   override fun createReactActivityDelegate(): ReactActivityDelegate =
 9:       DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
10: }
````

## File: android/app/src/main/java/com/hubermanappfrontend/MainApplication.kt
````kotlin
 1: package com.hubermanappfrontend
 2: import android.app.Application
 3: import com.facebook.react.PackageList
 4: import com.facebook.react.ReactApplication
 5: import com.facebook.react.ReactHost
 6: import com.facebook.react.ReactNativeHost
 7: import com.facebook.react.ReactPackage
 8: import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
 9: import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
10: import com.facebook.react.defaults.DefaultReactNativeHost
11: import com.facebook.react.soloader.OpenSourceMergedSoMapping
12: import com.facebook.soloader.SoLoader
13: class MainApplication : Application(), ReactApplication {
14:   override val reactNativeHost: ReactNativeHost =
15:       object : DefaultReactNativeHost(this) {
16:         override fun getPackages(): List<ReactPackage> =
17:             PackageList(this).packages.apply {
18:             }
19:         override fun getJSMainModuleName(): String = "index"
20:         override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG
21:         override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
22:         override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
23:       }
24:   override val reactHost: ReactHost
25:     get() = getDefaultReactHost(applicationContext, reactNativeHost)
26:   override fun onCreate() {
27:     super.onCreate()
28:     SoLoader.init(this, OpenSourceMergedSoMapping)
29:     if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
30:       load()
31:     }
32:   }
33: }
````

## File: android/app/src/main/res/drawable/rn_edit_text_material.xml
````xml
 1: <?xml version="1.0" encoding="utf-8"?>
 2: <inset xmlns:android="http://schemas.android.com/apk/res/android"
 3:        android:insetLeft="@dimen/abc_edit_text_inset_horizontal_material"
 4:        android:insetRight="@dimen/abc_edit_text_inset_horizontal_material"
 5:        android:insetTop="@dimen/abc_edit_text_inset_top_material"
 6:        android:insetBottom="@dimen/abc_edit_text_inset_bottom_material"
 7:        >
 8:     <selector>
 9:         <item android:state_enabled="false" android:drawable="@drawable/abc_textfield_default_mtrl_alpha"/>
10:         <item android:drawable="@drawable/abc_textfield_activated_mtrl_alpha"/>
11:     </selector>
12: </inset>
````

## File: android/app/src/main/res/values/strings.xml
````xml
1: <resources>
2:     <string name="app_name">hubermanAppFrontend</string>
3: </resources>
````

## File: android/app/src/main/res/values/styles.xml
````xml
1: <resources>
2:     <style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
3:         <item name="android:editTextBackground">@drawable/rn_edit_text_material</item>
4:     </style>
5: </resources>
````

## File: android/app/src/main/AndroidManifest.xml
````xml
 1: <manifest xmlns:android="http://schemas.android.com/apk/res/android">
 2:     <uses-permission android:name="android.permission.INTERNET" />
 3:     <application
 4:       android:name=".MainApplication"
 5:       android:label="@string/app_name"
 6:       android:icon="@mipmap/ic_launcher"
 7:       android:roundIcon="@mipmap/ic_launcher_round"
 8:       android:allowBackup="false"
 9:       android:theme="@style/AppTheme"
10:       android:supportsRtl="true">
11:       <activity
12:         android:name=".MainActivity"
13:         android:label="@string/app_name"
14:         android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
15:         android:launchMode="singleTask"
16:         android:windowSoftInputMode="adjustResize"
17:         android:exported="true">
18:         <intent-filter>
19:             <action android:name="android.intent.action.MAIN" />
20:             <category android:name="android.intent.category.LAUNCHER" />
21:         </intent-filter>
22:       </activity>
23:     </application>
24: </manifest>
````

## File: android/app/google-services.json
````json
 1: {
 2:   "project_info": {
 3:     "project_number": "544986799642",
 4:     "project_id": "huberman-95d6d",
 5:     "storage_bucket": "huberman-95d6d.firebasestorage.app"
 6:   },
 7:   "client": [
 8:     {
 9:       "client_info": {
10:         "mobilesdk_app_id": "1:544986799642:android:3cbfb40d755256d1b8fba3",
11:         "android_client_info": {
12:           "package_name": "com.lessay.protocolize"
13:         }
14:       },
15:       "oauth_client": [],
16:       "api_key": [
17:         {
18:           "current_key": "AIzaSyBv9CIzO50j7up-abLcLkJ0kwtAHMxjSIM"
19:         }
20:       ],
21:       "services": {
22:         "appinvite_service": {
23:           "other_platform_oauth_client": []
24:         }
25:       }
26:     }
27:   ],
28:   "configuration_version": "1"
29: }
````

## File: android/app/proguard-rules.pro
````
 1: # Add project specific ProGuard rules here.
 2: # By default, the flags in this file are appended to flags specified
 3: # in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
 4: # You can edit the include path and order by changing the proguardFiles
 5: # directive in build.gradle.
 6: #
 7: # For more details, see
 8: #   http://developer.android.com/guide/developing/tools/proguard.html
 9: 
10: # Add any project specific keep options here:
````

## File: android/gradle/wrapper/gradle-wrapper.properties
````
1: distributionBase=GRADLE_USER_HOME
2: distributionPath=wrapper/dists
3: distributionUrl=https\://services.gradle.org/distributions/gradle-8.13-bin.zip
4: networkTimeout=10000
5: validateDistributionUrl=true
6: zipStoreBase=GRADLE_USER_HOME
7: zipStorePath=wrapper/dists
````

## File: android/gradle.properties
````
 1: # Project-wide Gradle settings.
 2: 
 3: # IDE (e.g. Android Studio) users:
 4: # Gradle settings configured through the IDE *will override*
 5: # any settings specified in this file.
 6: 
 7: # For more details on how to configure your build environment visit
 8: # http://www.gradle.org/docs/current/userguide/build_environment.html
 9: 
10: # Specifies the JVM arguments used for the daemon process.
11: # The setting is particularly useful for tweaking memory settings.
12: # Default value: -Xmx512m -XX:MaxMetaspaceSize=256m
13: org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m
14: 
15: # When configured, Gradle will run in incubating parallel mode.
16: # This option should only be used with decoupled projects. More details, visit
17: # http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects
18: # org.gradle.parallel=true
19: 
20: # AndroidX package structure to make it clearer which packages are bundled with the
21: # Android operating system, and which are packaged with your app's APK
22: # https://developer.android.com/topic/libraries/support-library/androidx-rn
23: android.useAndroidX=true
24: 
25: # Use this property to specify which architecture you want to build.
26: # You can also override it from the CLI using
27: # ./gradlew <task> -PreactNativeArchitectures=x86_64
28: reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64
29: 
30: # Use this property to enable support to the new architecture.
31: # This will allow you to use TurboModules and the Fabric render in
32: # your application. You should enable this flag either if you want
33: # to write custom TurboModules/Fabric components OR use libraries that
34: # are providing them.
35: newArchEnabled=true
36: 
37: # Use this property to enable or disable the Hermes JS engine.
38: # If set to false, you will be using JSC instead.
39: hermesEnabled=true
````

## File: android/gradlew
````
  1: #!/bin/sh
  2: 
  3: #
  4: # Copyright © 2015-2021 the original authors.
  5: #
  6: # Licensed under the Apache License, Version 2.0 (the "License");
  7: # you may not use this file except in compliance with the License.
  8: # You may obtain a copy of the License at
  9: #
 10: #      https://www.apache.org/licenses/LICENSE-2.0
 11: #
 12: # Unless required by applicable law or agreed to in writing, software
 13: # distributed under the License is distributed on an "AS IS" BASIS,
 14: # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 15: # See the License for the specific language governing permissions and
 16: # limitations under the License.
 17: #
 18: # SPDX-License-Identifier: Apache-2.0
 19: #
 20: 
 21: ##############################################################################
 22: #
 23: #   Gradle start up script for POSIX generated by Gradle.
 24: #
 25: #   Important for running:
 26: #
 27: #   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is
 28: #       noncompliant, but you have some other compliant shell such as ksh or
 29: #       bash, then to run this script, type that shell name before the whole
 30: #       command line, like:
 31: #
 32: #           ksh Gradle
 33: #
 34: #       Busybox and similar reduced shells will NOT work, because this script
 35: #       requires all of these POSIX shell features:
 36: #         * functions;
 37: #         * expansions «$var», «${var}», «${var:-default}», «${var+SET}»,
 38: #           «${var#prefix}», «${var%suffix}», and «$( cmd )»;
 39: #         * compound commands having a testable exit status, especially «case»;
 40: #         * various built-in commands including «command», «set», and «ulimit».
 41: #
 42: #   Important for patching:
 43: #
 44: #   (2) This script targets any POSIX shell, so it avoids extensions provided
 45: #       by Bash, Ksh, etc; in particular arrays are avoided.
 46: #
 47: #       The "traditional" practice of packing multiple parameters into a
 48: #       space-separated string is a well documented source of bugs and security
 49: #       problems, so this is (mostly) avoided, by progressively accumulating
 50: #       options in "$@", and eventually passing that to Java.
 51: #
 52: #       Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,
 53: #       and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;
 54: #       see the in-line comments for details.
 55: #
 56: #       There are tweaks for specific operating systems such as AIX, CygWin,
 57: #       Darwin, MinGW, and NonStop.
 58: #
 59: #   (3) This script is generated from the Groovy template
 60: #       https://github.com/gradle/gradle/blob/HEAD/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
 61: #       within the Gradle project.
 62: #
 63: #       You can find Gradle at https://github.com/gradle/gradle/.
 64: #
 65: ##############################################################################
 66: 
 67: # Attempt to set APP_HOME
 68: 
 69: # Resolve links: $0 may be a link
 70: app_path=$0
 71: 
 72: # Need this for daisy-chained symlinks.
 73: while
 74:     APP_HOME=${app_path%"${app_path##*/}"}  # leaves a trailing /; empty if no leading path
 75:     [ -h "$app_path" ]
 76: do
 77:     ls=$( ls -ld "$app_path" )
 78:     link=${ls#*' -> '}
 79:     case $link in             #(
 80:       /*)   app_path=$link ;; #(
 81:       *)    app_path=$APP_HOME$link ;;
 82:     esac
 83: done
 84: 
 85: # This is normally unused
 86: # shellcheck disable=SC2034
 87: APP_BASE_NAME=${0##*/}
 88: # Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)
 89: APP_HOME=$( cd -P "${APP_HOME:-./}" > /dev/null && printf '%s\n' "$PWD" ) || exit
 90: 
 91: # Use the maximum available, or set MAX_FD != -1 to use that value.
 92: MAX_FD=maximum
 93: 
 94: warn () {
 95:     echo "$*"
 96: } >&2
 97: 
 98: die () {
 99:     echo
100:     echo "$*"
101:     echo
102:     exit 1
103: } >&2
104: 
105: # OS specific support (must be 'true' or 'false').
106: cygwin=false
107: msys=false
108: darwin=false
109: nonstop=false
110: case "$( uname )" in                #(
111:   CYGWIN* )         cygwin=true  ;; #(
112:   Darwin* )         darwin=true  ;; #(
113:   MSYS* | MINGW* )  msys=true    ;; #(
114:   NONSTOP* )        nonstop=true ;;
115: esac
116: 
117: CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar
118: 
119: 
120: # Determine the Java command to use to start the JVM.
121: if [ -n "$JAVA_HOME" ] ; then
122:     if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
123:         # IBM's JDK on AIX uses strange locations for the executables
124:         JAVACMD=$JAVA_HOME/jre/sh/java
125:     else
126:         JAVACMD=$JAVA_HOME/bin/java
127:     fi
128:     if [ ! -x "$JAVACMD" ] ; then
129:         die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME
130: 
131: Please set the JAVA_HOME variable in your environment to match the
132: location of your Java installation."
133:     fi
134: else
135:     JAVACMD=java
136:     if ! command -v java >/dev/null 2>&1
137:     then
138:         die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
139: 
140: Please set the JAVA_HOME variable in your environment to match the
141: location of your Java installation."
142:     fi
143: fi
144: 
145: # Increase the maximum file descriptors if we can.
146: if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
147:     case $MAX_FD in #(
148:       max*)
149:         # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
150:         # shellcheck disable=SC2039,SC3045
151:         MAX_FD=$( ulimit -H -n ) ||
152:             warn "Could not query maximum file descriptor limit"
153:     esac
154:     case $MAX_FD in  #(
155:       '' | soft) :;; #(
156:       *)
157:         # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
158:         # shellcheck disable=SC2039,SC3045
159:         ulimit -n "$MAX_FD" ||
160:             warn "Could not set maximum file descriptor limit to $MAX_FD"
161:     esac
162: fi
163: 
164: # Collect all arguments for the java command, stacking in reverse order:
165: #   * args from the command line
166: #   * the main class name
167: #   * -classpath
168: #   * -D...appname settings
169: #   * --module-path (only if needed)
170: #   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.
171: 
172: # For Cygwin or MSYS, switch paths to Windows format before running java
173: if "$cygwin" || "$msys" ; then
174:     APP_HOME=$( cygpath --path --mixed "$APP_HOME" )
175:     CLASSPATH=$( cygpath --path --mixed "$CLASSPATH" )
176: 
177:     JAVACMD=$( cygpath --unix "$JAVACMD" )
178: 
179:     # Now convert the arguments - kludge to limit ourselves to /bin/sh
180:     for arg do
181:         if
182:             case $arg in                                #(
183:               -*)   false ;;                            # don't mess with options #(
184:               /?*)  t=${arg#/} t=/${t%%/*}              # looks like a POSIX filepath
185:                     [ -e "$t" ] ;;                      #(
186:               *)    false ;;
187:             esac
188:         then
189:             arg=$( cygpath --path --ignore --mixed "$arg" )
190:         fi
191:         # Roll the args list around exactly as many times as the number of
192:         # args, so each arg winds up back in the position where it started, but
193:         # possibly modified.
194:         #
195:         # NB: a `for` loop captures its iteration list before it begins, so
196:         # changing the positional parameters here affects neither the number of
197:         # iterations, nor the values presented in `arg`.
198:         shift                   # remove old arg
199:         set -- "$@" "$arg"      # push replacement arg
200:     done
201: fi
202: 
203: 
204: # Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
205: DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'
206: 
207: # Collect all arguments for the java command:
208: #   * DEFAULT_JVM_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,
209: #     and any embedded shellness will be escaped.
210: #   * For example: A user cannot expect ${Hostname} to be expanded, as it is an environment variable and will be
211: #     treated as '${Hostname}' itself on the command line.
212: 
213: set -- \
214:         "-Dorg.gradle.appname=$APP_BASE_NAME" \
215:         -classpath "$CLASSPATH" \
216:         org.gradle.wrapper.GradleWrapperMain \
217:         "$@"
218: 
219: # Stop when "xargs" is not available.
220: if ! command -v xargs >/dev/null 2>&1
221: then
222:     die "xargs is not available"
223: fi
224: 
225: # Use "xargs" to parse quoted args.
226: #
227: # With -n1 it outputs one arg per line, with the quotes and backslashes removed.
228: #
229: # In Bash we could simply go:
230: #
231: #   readarray ARGS < <( xargs -n1 <<<"$var" ) &&
232: #   set -- "${ARGS[@]}" "$@"
233: #
234: # but POSIX shell has neither arrays nor command substitution, so instead we
235: # post-process each arg (as a line of input to sed) to backslash-escape any
236: # character that might be a shell metacharacter, then use eval to reverse
237: # that process (while maintaining the separation between arguments), and wrap
238: # the whole thing up as a single "set" statement.
239: #
240: # This will of course break if any of these variables contains a newline or
241: # an unmatched quote.
242: #
243: 
244: eval "set -- $(
245:         printf '%s\n' "$DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS" |
246:         xargs -n1 |
247:         sed ' s~[^-[:alnum:]+,./:=@_]~\\&~g; ' |
248:         tr '\n' ' '
249:     )" '"$@"'
250: 
251: exec "$JAVACMD" "$@"
````

## File: android/gradlew.bat
````
 1: @rem
 2: @rem Copyright 2015 the original author or authors.
 3: @rem
 4: @rem Licensed under the Apache License, Version 2.0 (the "License");
 5: @rem you may not use this file except in compliance with the License.
 6: @rem You may obtain a copy of the License at
 7: @rem
 8: @rem      https://www.apache.org/licenses/LICENSE-2.0
 9: @rem
10: @rem Unless required by applicable law or agreed to in writing, software
11: @rem distributed under the License is distributed on an "AS IS" BASIS,
12: @rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
13: @rem See the License for the specific language governing permissions and
14: @rem limitations under the License.
15: @rem
16: @rem SPDX-License-Identifier: Apache-2.0
17: @rem
18: 
19: @if "%DEBUG%"=="" @echo off
20: @rem ##########################################################################
21: @rem
22: @rem  Gradle startup script for Windows
23: @rem
24: @rem ##########################################################################
25: 
26: @rem Set local scope for the variables with windows NT shell
27: if "%OS%"=="Windows_NT" setlocal
28: 
29: set DIRNAME=%~dp0
30: if "%DIRNAME%"=="" set DIRNAME=.
31: @rem This is normally unused
32: set APP_BASE_NAME=%~n0
33: set APP_HOME=%DIRNAME%
34: 
35: @rem Resolve any "." and ".." in APP_HOME to make it shorter.
36: for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi
37: 
38: @rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
39: set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"
40: 
41: @rem Find java.exe
42: if defined JAVA_HOME goto findJavaFromJavaHome
43: 
44: set JAVA_EXE=java.exe
45: %JAVA_EXE% -version >NUL 2>&1
46: if %ERRORLEVEL% equ 0 goto execute
47: 
48: echo. 1>&2
49: echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2
50: echo. 1>&2
51: echo Please set the JAVA_HOME variable in your environment to match the 1>&2
52: echo location of your Java installation. 1>&2
53: 
54: goto fail
55: 
56: :findJavaFromJavaHome
57: set JAVA_HOME=%JAVA_HOME:"=%
58: set JAVA_EXE=%JAVA_HOME%/bin/java.exe
59: 
60: if exist "%JAVA_EXE%" goto execute
61: 
62: echo. 1>&2
63: echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2
64: echo. 1>&2
65: echo Please set the JAVA_HOME variable in your environment to match the 1>&2
66: echo location of your Java installation. 1>&2
67: 
68: goto fail
69: 
70: :execute
71: @rem Setup the command line
72: 
73: set CLASSPATH=%APP_HOME%\gradle\wrapper\gradle-wrapper.jar
74: 
75: 
76: @rem Execute Gradle
77: "%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*
78: 
79: :end
80: @rem End local scope for the variables with windows NT shell
81: if %ERRORLEVEL% equ 0 goto mainEnd
82: 
83: :fail
84: rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of
85: rem the _cmd.exe /c_ return code!
86: set EXIT_CODE=%ERRORLEVEL%
87: if %EXIT_CODE% equ 0 set EXIT_CODE=1
88: if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%
89: exit /b %EXIT_CODE%
90: 
91: :mainEnd
92: if "%OS%"=="Windows_NT" endlocal
93: 
94: :omega
````

## File: app_documentation/ complex_workflows.md
````markdown
  1: **Huberman App: Complex Workflow & Algorithm Design**
  2: 
  3: **1. Introduction**
  4: 
  5: This document details the specific logic and design patterns for key complex workflows within the Huberman App backend. It elaborates on the processes outlined in `detailed_plan.md` and builds upon the modular structure defined in `component_breakdown.md` and `component_interfaces_interactions.md`. The goal is to provide clear implementation guidance for developers working on these critical features.
  6: 
  7: **2. Subscription Lifecycle Management**
  8: 
  9: *   **Goal:** To accurately track the state of a user's subscription across different providers (Stripe, Apple IAP, Google Play Billing) based on webhook events and scheduled checks.
 10: *   **Key Components:**
 11:     *   `SubscriptionBilling` Module: `SubscriptionService`, `WebhookController`, `Subscription` Model.
 12:     *   `plans` table, `subscriptions` table (`status`, `ends_at`, `trial_ends_at` columns are crucial).
 13:     *   Payment Providers: Stripe/Paddle/Apple/Google sending webhooks/notifications.
 14: *   **Core Logic (State Machine):** The `subscriptions.status` field represents the current state. Transitions are triggered primarily by provider webhooks handled by the `WebhookController` which delegates processing to the `SubscriptionService`.
 15: 
 16:     *   **States:**
 17:         *   `incomplete`: Initial state after checkout initiation but before successful payment (relevant for Stripe Checkout/Paddle).
 18:         *   `trialing`: User is in a free trial period (requires `trial_ends_at` to be set).
 19:         *   `active`: User has a paid, currently valid subscription. `ends_at` indicates the end of the current paid period.
 20:         *   `past_due`: Payment failed, provider is retrying (Stripe/Paddle specific). Grace period might apply.
 21:         *   `canceled`: User explicitly canceled *or* payment failed definitively. Subscription may remain active until `ends_at`. Feature access depends on whether `ends_at` is in the future.
 22:         *   `expired`: The subscription period (`ends_at`) has passed, and it was not renewed (either due to cancellation or final payment failure). No access.
 23: 
 24:     *   **State Transitions (Conceptual - Provider events may vary):**
 25:         *   **(Checkout) -> `incomplete`**: User initiates checkout (Stripe/Paddle).
 26:         *   `incomplete` -> `active`/`trialing`: `checkout.session.completed` (Stripe), `subscription_created` (Paddle) webhook received with successful payment or trial setup. Update `status`, `ends_at`, `trial_ends_at`.
 27:         *   `trialing` -> `active`: `invoice.payment_succeeded` (Stripe) or `subscription_payment_succeeded` (Paddle) after trial ends. Update `status`, `ends_at`. *OR* could happen via scheduled job checking `trial_ends_at`.
 28:         *   `trialing` -> `expired`: Trial ends, no payment method, or user canceled during trial. `customer.subscription.updated` (Stripe), `subscription_canceled` (Paddle), `DID_FAIL_TO_RENEW` (Apple), `SUBSCRIPTION_EXPIRED` (Google). Update `status`.
 29:         *   `active` -> `active`: Renewal successful. `invoice.payment_succeeded` (Stripe), `subscription_payment_succeeded` (Paddle), `DID_RENEW` (Apple), `SUBSCRIPTION_RENEWED` (Google). Update `ends_at` for the next period.
 30:         *   `active` -> `past_due`: Renewal payment fails. `invoice.payment_failed` (Stripe - requires action), `subscription_payment_failed` (Paddle). Update `status`.
 31:         *   `active` -> `canceled`: User cancels via provider portal/app. `customer.subscription.updated` (Stripe - `cancel_at_period_end=true`), `subscription_canceled` (Paddle), `DID_CHANGE_RENEWAL_STATUS` (Apple - off), `SUBSCRIPTION_CANCELED` (Google). Update `status`. Subscription *might* remain usable until `ends_at`.
 32:         *   `past_due` -> `active`: Successful payment after retry. `invoice.payment_succeeded` (Stripe), `subscription_payment_succeeded` (Paddle). Update `status`, `ends_at`.
 33:         *   `past_due` -> `canceled`: Final retry fails. `customer.subscription.updated` (Stripe - status `canceled`), `subscription_payment_failed` (Paddle - after retries). Update `status`. Set `ends_at` to now/past if not already.
 34:         *   `canceled` -> `expired`: `ends_at` date is reached for a canceled subscription. Can be handled by a scheduled job checking `subscriptions` where `status = canceled` and `ends_at <= NOW()`. Update `status`.
 35: 
 36:     *   **Webhook Handling:** `WebhookController` receives POST request, verifies signature (critical!), determines provider and event type, and calls `SubscriptionService::handleWebhook()`. Service parses payload, finds relevant `User`/`Subscription`, updates DB state, and fires internal Laravel events (e.g., `SubscriptionRenewed`, `SubscriptionCanceled`) for other modules to react to.
 37:     *   **Provider Differences:** Apple/Google require server-side receipt validation and parsing specific notification types (App Store Server Notifications V2 / Google Play Developer API RTDN). Logic needs to map their events to the internal state machine.
 38: 
 39: **3. Feature Gating Logic**
 40: 
 41: *   **Goal:** To restrict access to premium API routes and potentially limit usage of certain features (e.g., number of notes) based on the user's active subscription status.
 42: *   **Key Components:**
 43:     *   Laravel Middleware (e.g., `CheckPremiumAccess`).
 44:     *   Laravel Policies (e.g., `NotePolicy`).
 45:     *   `SubscriptionBilling` Module: `SubscriptionServiceInterface::userHasActivePremiumSubscription()`.
 46:     *   `subscriptions` table.
 47:     *   Redis Cache.
 48: *   **Core Logic (Middleware Example - `CheckPremiumAccess`):**
 49:     ```php
 50:     // App/Http/Middleware/CheckPremiumAccess.php (Conceptual)
 51:     namespace App\Http\Middleware;
 52: 
 53:     use Closure;
 54:     use Illuminate\Http\Request;
 55:     use Illuminate\Support\Facades\Auth;
 56:     use Illuminate\Support\Facades\Cache;
 57:     use App\Modules\SubscriptionBilling\Contracts\SubscriptionServiceInterface; // Use Interface
 58: 
 59:     class CheckPremiumAccess
 60:     {
 61:         protected $subscriptionService;
 62: 
 63:         public function __construct(SubscriptionServiceInterface $subscriptionService) {
 64:             $this->subscriptionService = $subscriptionService;
 65:         }
 66: 
 67:         public function handle(Request $request, Closure $next)
 68:         {
 69:             $user = Auth::user();
 70: 
 71:             if (!$user) {
 72:                 return response()->json(['message' => 'Unauthenticated.'], 401); // Should be handled by 'auth:sanctum' earlier
 73:             }
 74: 
 75:             // 1. Check Cache First
 76:             $cacheKey = "user:{$user->id}:is_premium";
 77:             $isPremium = Cache::get($cacheKey);
 78: 
 79:             if ($isPremium === null) {
 80:                 // 2. Cache Miss: Ask the Subscription Service
 81:                 $isPremium = $this->subscriptionService->userHasActivePremiumSubscription($user);
 82:                 // 3. Update Cache (e.g., for 15 minutes)
 83:                 Cache::put($cacheKey, $isPremium, now()->addMinutes(15));
 84:             }
 85: 
 86:             if (!$isPremium) {
 87:                 // 4. Deny Access if not Premium
 88:                 return response()->json(['message' => 'Premium subscription required.'], 403);
 89:             }
 90: 
 91:             // 5. Allow Access
 92:             return $next($request);
 93:         }
 94:     }
 95:     ```
 96: *   **Core Logic (`SubscriptionServiceInterface::userHasActivePremiumSubscription`):**
 97:     *   Takes a `User` object as input.
 98:     *   Queries the `subscriptions` table:
 99:         *   `WHERE user_id = ?`
100:         *   `WHERE status IN ['active', 'trialing']` (Or just `active` if trials don't grant full access).
101:         *   *(Optional but recommended)* `WHERE (ends_at IS NULL OR ends_at > NOW())` - Handles cases where status might be `canceled` but still within the paid period.
102:         *   Needs join/check against `plans` table to ensure the active subscription is for a *premium* plan type.
103:     *   Returns `true` if such a subscription exists, `false` otherwise.
104: *   **Policy Integration:** Policies (e.g., `NotePolicy::create(User $user)`) can inject `SubscriptionServiceInterface` and call `userHasActivePremiumSubscription()` or check feature flags (e.g., note limits based on plan) as part of their authorization logic.
105: *   **Application:** Apply the `CheckPremiumAccess` middleware to API routes/groups in `routes/api.php` that correspond to premium features. Use Policies for model-specific authorization checks within controllers.
106: 
107: **4. Customizable Reminders (Premium)**
108: 
109: *   **Goal:** Allow premium users to set custom reminders for specific protocols, triggering a push notification at the user-defined time/frequency in their local timezone.
110: *   **Key Components:**
111:     *   `ProtocolEngine` Module: `ReminderController`, `ReminderService`, `UserReminder` Model (stores `user_id`, `protocol_id`, `reminder_time`, `frequency`, `timezone`, `last_sent_at`, `is_active`, `device_token` - *CRITICAL*).
112:     *   Laravel Task Scheduling (`app/Console/Kernel.php`).
113:     *   Laravel Queues & Workers.
114:     *   `SendProtocolReminderNotification` Job & Notification class.
115:     *   Push Notification Service (e.g., FCM, APNS via Laravel Notifications or specific SDKs).
116:     *   React Native App (responsible for getting and sending the device token to the backend).
117: *   **Core Logic:**
118: 
119:     1.  **Device Token Registration:** When the user logs in or enables notifications, the React Native app gets the unique device push token (FCM/APNS) and sends it to the backend API (e.g., `POST /api/user/device-token`). The backend stores this token, likely associated with the `User` model or a dedicated `devices` table. *Storing multiple tokens per user is necessary if they use multiple devices.*
120:     2.  **Reminder Creation (API):** User interacts with RN UI -> `POST /api/reminders` -> `ReminderController` -> `ReminderService::setReminder()`.
121:         *   Service validates input (requires premium check).
122:         *   Saves reminder details to `user_reminders` table, including user's selected time, frequency (daily, weekly, specific days), protocol, and user's current timezone (stored e.g., on `users` table or passed in request). *Crucially, it needs access to the user's valid device token(s) when the notification job runs.*
123:     3.  **Scheduled Task (`Kernel.php`):** A console command is scheduled to run frequently (e.g., every minute).
124:         ```php
125:         // app/Console/Kernel.php
126:         protected function schedule(Schedule $schedule)
127:         {
128:             $schedule->command('reminders:send-due')->everyMinute();
129:             // OR use $schedule->job(new ProcessDueReminders)->everyMinute();
130:         }
131:         ```
132:     4.  **Processing Due Reminders (`reminders:send-due` Command / `ProcessDueReminders` Job):**
133:         *   Get the current time (UTC).
134:         *   Query the `user_reminders` table for active reminders (`is_active = true`).
135:         *   **Crucially, for each reminder:**
136:             *   Convert the *current UTC time* to the *user's stored timezone*.
137:             *   Check if the user's local time matches the `reminder_time` stored for the reminder.
138:             *   Check if the frequency matches (e.g., is it the correct day of the week?).
139:             *   Check `last_sent_at` to avoid double-sending if the job runs slightly late.
140:         *   For each reminder determined to be *due now*:
141:             *   Dispatch a `SendProtocolReminderNotification` job to the queue, passing the `user_reminder_id` or necessary details.
142:             ```php
143:             // Conceptual Command/Job Logic
144:             $nowUtc = now();
145:             $dueReminders = UserReminder::where('is_active', true)->cursor(); // Use cursor for memory efficiency
146: 
147:             foreach ($dueReminders as $reminder) {
148:                 $userTimezone = $reminder->user->timezone ?? 'UTC'; // Get user timezone
149:                 $nowInUserTz = $nowUtc->copy()->setTimezone($userTimezone);
150:                 $reminderTime = Carbon::parse($reminder->reminder_time, $userTimezone); // Time stored without date
151: 
152:                 // Compare times (HH:MM) and check frequency/day constraints
153:                 if ($nowInUserTz->format('H:i') == $reminderTime->format('H:i') && /* check frequency match */ && /* check not recently sent */) {
154:                    SendProtocolReminderNotification::dispatch($reminder);
155:                    // Optionally update last_sent_at here or in the job
156:                 }
157:             }
158:             ```
159:     5.  **Sending Notification (`SendProtocolReminderNotification` Job):**
160:         *   Executed by a queue worker.
161:         *   Retrieves the `UserReminder` and associated `User` and `Protocol`.
162:         *   Fetches the target user's valid device token(s) (from `users` or `devices` table).
163:         *   Constructs the notification payload (title, body with protocol name).
164:         *   Uses Laravel's Notification system (e.g., `Notification::send($user, new ProtocolReminder($protocol))`) or a specific service (FCM/APNS) to send the push notification to the user's device token(s).
165:         *   Handles potential errors (e.g., invalid token). Updates `last_sent_at` on the `UserReminder`.
166: 
167: **5. Tracking & Visualization Logic (Premium)**
168: 
169: *   **Goal:** Allow premium users to log their adherence to protocols and view progress visualizations like streaks or completion rates.
170: *   **Key Components:**
171:     *   `ProtocolEngine` Module: `TrackingController`, `TrackingService`.
172:     *   `user_protocol_tracking` table (`id`, `user_id`, `protocol_id`, `tracked_at` (DATE), `notes`, `metadata`, `created_at`, `updated_at`).
173: *   **Data Storage:** Each time a user marks a protocol as completed for a specific day, a record is created in `user_protocol_tracking`. The `tracked_at` field (DATE type) is key. The unique constraint `(user_id, protocol_id, tracked_at)` prevents duplicates.
174: *   **Logging Adherence (API):** User taps "Mark Done" -> `POST /api/tracking/log` (with `protocol_id` and optional `date`) -> `TrackingController` -> `TrackingService::logAdherence()`.
175:     *   Service validates input (requires premium check).
176:     *   Inserts or updates record in `user_protocol_tracking`. Use `updateOrCreate` based on the unique constraint.
177: *   **Visualization - Streak Calculation (Example):**
178:     *   **API:** `GET /api/tracking/summary?protocol_id={id}&metric=streak` -> `TrackingController` -> `TrackingService::calculateStreak()`.
179:     *   **`TrackingService::calculateStreak(User $user, int $protocolId)` Logic (Conceptual Pseudo-code):**
180:         ```pseudo
181:         function calculateStreak(user, protocolId):
182:           streak = 0
183:           today = currentDate() // Or maybe the latest tracked date for this user/protocol? Decide requirement.
184: 
185:           // Get relevant tracking dates, ordered descending
186:           trackedDates = query database:
187:              SELECT tracked_at FROM user_protocol_tracking
188:              WHERE user_id = user.id AND protocol_id = protocolId
189:              ORDER BY tracked_at DESC
190: 
191:           if trackedDates is empty:
192:              return 0
193: 
194:           // Check if the most recent tracking is today or yesterday (allows continuation)
195:           latestTrackedDate = trackedDates[0]
196:           if latestTrackedDate is not today AND latestTrackedDate is not yesterday:
197:              return 0 // Streak broken if >1 day missed
198: 
199:           // Check consecutive days backward
200:           expectedDate = today
201:           if latestTrackedDate is yesterday:
202:              expectedDate = yesterday // Start checking from yesterday if today wasn't logged
203: 
204:           for date in trackedDates:
205:              if date == expectedDate:
206:                 streak = streak + 1
207:                 expectedDate = expectedDate.subtract(1 day) // Look for the previous day
208:              else if date < expectedDate:
209:                  // Gap detected, streak broken before this date
210:                  break
211:              // else if date > expectedDate: This shouldn't happen with ORDER BY DESC
212: 
213:           return streak
214:         ```
215: *   **Other Visualizations:**
216:     *   **Completion % (e.g., Monthly):** Query `user_protocol_tracking` for the user/protocol within the date range. Count distinct `tracked_at` days. Divide by the total number of days in the month.
217:     *   **Calendar Heatmap:** Query all `tracked_at` dates for the user/protocol within a visible range. Frontend uses this data to color calendar days.
218: 
219: **6. Conclusion**
220: 
221: These detailed workflow descriptions provide a blueprint for implementing the core complex features of the Huberman App. Adhering to these designs, leveraging appropriate Laravel features (Middleware, Policies, Queues, Scheduling, Events), and carefully handling state transitions and edge cases (especially with external providers) will be crucial for building a robust and reliable backend.
````

## File: app_documentation/api_design_documentation.md
````markdown
  1: Okay, let's create the plan document (`api_design_documentation.md`) outlining the process and standards for creating the OpenAPI specification, and then provide a conceptual structure for the `openapi.yaml` file itself.
  2: 
  3: --- START OF FILE api_design_documentation.md ---
  4: 
  5: **Huberman App: API Design & Documentation Plan (OpenAPI)**
  6: 
  7: **1. Introduction**
  8: 
  9: This document outlines the process and standards for creating and maintaining the RESTful API contract for the Huberman App backend using the OpenAPI Specification (formerly Swagger). The resulting `openapi.yaml` file will serve as the single source of truth for API endpoints, request/response schemas, authentication, authorization requirements, and error handling. This ensures clear communication and alignment between the backend (Laravel) and frontend (React Native) development teams, facilitating efficient integration and testing.
 10: 
 11: **2. Tooling and Format**
 12: 
 13: *   **Specification Version:** OpenAPI 3.x (latest stable version recommended).
 14: *   **Format:** YAML (`openapi.yaml`) is preferred for its readability compared to JSON.
 15: *   **Generation/Maintenance:**
 16:     *   **Initial Creation:** Likely manual or semi-automated based on initial controller/route definitions.
 17:     *   **Ongoing Maintenance:** Consider using code annotations (e.g., `zircote/swagger-php` for Laravel) to generate the spec from PHP attributes/docblocks. This keeps documentation closer to the code but requires disciplined annotation. Alternatively, manual updates are feasible if rigorously maintained alongside code changes. The chosen method must be consistently applied.
 18:     *   **Validation:** Use OpenAPI validation tools (online validators, editor plugins, CLI tools) regularly, potentially integrated into CI/CD pipelines, to ensure the spec is syntactically correct and adheres to the standard.
 19: 
 20: **3. Core Specification Structure**
 21: 
 22: The `openapi.yaml` file will utilize the following key sections:
 23: 
 24: *   `openapi`: Specifies the OpenAPI version.
 25: *   `info`: Contains metadata (title, version, description).
 26: *   `servers`: Defines base URLs for different environments (local, staging, production).
 27: *   `tags`: Groups related API endpoints, typically aligned with backend modules (e.g., `Authentication`, `UserManagement`, `ContentManagement`, `NotesService`, `SubscriptionBilling`, `ProtocolEngine`, `Webhooks`).
 28: *   `paths`: Defines all available API endpoints, including:
 29:     *   HTTP methods (GET, POST, PUT, DELETE, etc.).
 30:     *   Parameters (path, query, header).
 31:     *   `requestBody`: Describes the payload for POST/PUT requests.
 32:     *   `responses`: Defines possible HTTP status codes and their corresponding response schemas (including success and error responses).
 33:     *   `security`: Specifies the required authentication/authorization schemes for the endpoint.
 34:     *   `summary`, `description`, `tags`: For organization and clarity.
 35: *   `components`: Defines reusable elements:
 36:     *   `schemas`: Data models for request bodies and response payloads (based on `database_plan.md` and API Resources).
 37:     *   `securitySchemes`: Defines authentication methods (e.g., Bearer Token).
 38:     *   `responses`: Reusable response definitions (e.g., standard error responses).
 39:     *   `parameters`: Reusable parameter definitions.
 40: 
 41: **4. Authentication (Laravel Sanctum/Passport)**
 42: 
 43: *   **Method:** Bearer Token authentication via Laravel Sanctum (preferred for SPAs/mobile apps) or Passport.
 44: *   **Documentation:**
 45:     *   Define a `securityScheme` named `bearerAuth` (or similar) of type `http` and scheme `bearer` in `components/securitySchemes`.
 46:     *   Endpoints requiring authentication will include a `security` section referencing this scheme: `security: [{ bearerAuth: [] }]`.
 47:     *   Login (`/api/login`) and registration (`/api/register`) endpoints will describe how to obtain the token in their response descriptions.
 48: 
 49: **5. Authorization & Feature Gating (Premium Features)**
 50: 
 51: *   **Enforcement:** All authorization and feature gating logic (checking for active premium subscriptions) is implemented **on the backend** (via Middleware, Policies, Service checks based on `SubscriptionBilling` module). The API documentation *reflects* these requirements but does not enforce them.
 52: *   **Documentation:**
 53:     *   Endpoints or specific operations requiring a Premium subscription will be clearly marked.
 54:     *   **Method 1 (Description):** Use the `summary` or `description` field to explicitly state "Requires active Premium subscription."
 55:     *   **Method 2 (Custom Extension - Optional):** Use a custom extension like `x-premium-required: true` on the path item or operation object for machine-readable indication, if desired.
 56:     *   A standard `403 Forbidden` response schema (`#/components/responses/ForbiddenError`) will be referenced for cases where a non-premium user attempts to access a premium feature.
 57: 
 58: **6. Endpoint Structure & Key Areas (Based on Modules)**
 59: 
 60: Endpoints will be grouped using tags matching the modules defined in `component_breakdown.md`.
 61: 
 62: *   **`Authentication` Tag:**
 63:     *   `POST /api/register`
 64:     *   `POST /api/login`
 65:     *   `POST /api/logout` (Requires `bearerAuth`)
 66:     *   Password Reset endpoints (e.g., `POST /api/forgot-password`, `POST /api/reset-password`)
 67: *   **`UserManagement` Tag:**
 68:     *   `GET /api/user/profile` (Requires `bearerAuth`)
 69:     *   `PUT /api/user/profile` (Requires `bearerAuth`)
 70: *   **`SubscriptionBilling` Tag:**
 71:     *   `GET /api/plans` (Lists available subscription plans - Free/Premium)
 72:     *   `GET /api/user/subscription` (Gets current user's subscription status - Requires `bearerAuth`)
 73:     *   Potentially endpoints to initiate checkout (provider-dependent) or fetch portal links.
 74: *   **`ContentManagement` Tag:**
 75:     *   `GET /api/episodes` (List episodes)
 76:     *   `GET /api/episodes/{id}` (Get episode details, potentially including summaries)
 77:     *   `GET /api/protocols` (List protocols - response may differ for free/premium users, documented in description)
 78:     *   `GET /api/protocols/{id}` (Get protocol details - response details may differ, e.g., full implementation guide only for premium, documented in description)
 79:     *   `GET /api/summaries` (Potentially filtered by episode/protocol)
 80: *   **`NotesService` Tag:**
 81:     *   `GET /api/notes` (List user's notes, requires `bearerAuth`)
 82:     *   `POST /api/notes` (Create note, requires `bearerAuth` - premium limits described)
 83:     *   `GET /api/notes/{id}` (Get specific note, requires `bearerAuth` + ownership policy check)
 84:     *   `PUT /api/notes/{id}` (Update note, requires `bearerAuth` + ownership policy check)
 85:     *   `DELETE /api/notes/{id}` (Delete note, requires `bearerAuth` + ownership policy check)
 86:     *   `GET /api/episodes/{id}/public-notes` (Fetch public notes for an episode - premium feature for *viewing* or tied to note creator being premium? Clarify requirement.)
 87: *   **`ProtocolEngine` Tag (Primarily Premium):**
 88:     *   `GET /api/reminders` (Requires `bearerAuth`, documented as Premium)
 89:     *   `POST /api/reminders` (Requires `bearerAuth`, documented as Premium)
 90:     *   `PUT /api/reminders/{id}` (Requires `bearerAuth`, documented as Premium)
 91:     *   `DELETE /api/reminders/{id}` (Requires `bearerAuth`, documented as Premium)
 92:     *   `POST /api/tracking/log` (Log adherence, requires `bearerAuth`, documented as Premium)
 93:     *   `GET /api/tracking/summary` (Get tracking data/streaks, requires `bearerAuth`, documented as Premium)
 94: *   **`Webhooks` Tag:**
 95:     *   `POST /api/webhooks/stripe`
 96:     *   `POST /api/webhooks/apple`
 97:     *   `POST /api/webhooks/google`
 98:     *   (These endpoints *do not* use `bearerAuth`. Security is via signature verification, which should be noted in the description. Request bodies will match provider specifications).
 99: 
100: **7. Request/Response Schemas (`components/schemas`)**
101: 
102: *   Define reusable schemas for all major data entities (`User`, `Episode`, `Protocol`, `Summary`, `Note`, `Plan`, `Subscription`, `Reminder`, `TrackingLog`, etc.) based on `database_plan.md` and how data is structured for the API (using Laravel API Resources).
103: *   Define standard success response wrappers if needed (e.g., `{ "data": <Schema> }`).
104: *   Define standard error response schemas (see below).
105: 
106: **8. Error Handling**
107: 
108: *   **Standard Structure:** Define a consistent error response structure. Example:
109:     ```yaml
110:     ErrorResponse:
111:       type: object
112:       properties:
113:         message:
114:           type: string
115:           description: General error message.
116:         errors: # Optional: Only for validation errors (422)
117:           type: object
118:           additionalProperties:
119:             type: array
120:             items:
121:               type: string
122:           description: Field-specific validation errors.
123:     ```
124: *   **HTTP Status Codes:** Document standard usage:
125:     *   `200 OK`: Successful GET, PUT, DELETE.
126:     *   `201 Created`: Successful POST.
127:     *   `204 No Content`: Successful DELETE where no body is returned.
128:     *   `400 Bad Request`: Generic client error (e.g., malformed JSON, invalid parameters not caught by validation).
129:     *   `401 Unauthorized`: Missing or invalid authentication token.
130:     *   `403 Forbidden`: Authenticated user lacks permission (e.g., policy failure, non-premium user accessing premium feature).
131:     *   `404 Not Found`: Resource not found.
132:     *   `422 Unprocessable Entity`: Validation errors (use `errors` field in response).
133:     *   `500 Internal Server Error`: Unexpected server-side error.
134: *   **Reusable Responses:** Define common error responses in `components/responses` (e.g., `NotFound`, `Unauthorized`, `Forbidden`, `ValidationError`, `InternalServerError`) referencing the `ErrorResponse` schema.
135: 
136: **9. API Versioning**
137: 
138: *   Implement API versioning from the start, likely via a URL prefix (e.g., `/api/v1/...`). Include this prefix in the `servers` definition.
139: 
140: **10. Maintenance and Governance**
141: 
142: *   The `openapi.yaml` file MUST be checked into version control (Git).
143: *   Pull requests modifying API-related backend code SHOULD include corresponding updates to the `openapi.yaml` file.
144: *   Regular reviews and validation checks (manual or automated) are necessary to keep the documentation accurate and useful.
145: 
146: **11. Outcome**
147: 
148: The final deliverable is a comprehensive, version-controlled `openapi.yaml` file located in the project repository root or a designated `/docs` directory. This file serves as the definitive contract for the Huberman App's RESTful API.
````

## File: app_documentation/app_description.md
````markdown
 1: **1. App Name**
 2: 
 3: Huberman App (Suggested Name)
 4: 
 5: **2. Introduction/Executive Summary**
 6: 
 7: The Huberman App is designed as a dedicated companion tool for listeners of the Huberman Lab podcast. Its core purpose is to bridge the gap between listening to the podcast and effectively implementing its science-backed health and performance protocols into daily life. It achieves this by providing structured guidance, actionable reminders, learning resources, progress tracking, and community features, addressing the challenge of translating extensive podcast information into consistent practice.
 8: 
 9: **3. Target Audience**
10: 
11: The app is intended for listeners and followers ("acolytes") of the Huberman Lab podcast who are motivated to apply the scientific protocols discussed to improve their health, well-being, performance, and overall lifestyle.
12: 
13: **4. Key Features**
14: 
15: The app operates on a Freemium model, offering both free core functionalities and an expanded Premium tier via subscription:
16: 
17: **Free Tier Features:**
18: 
19: *   **Basic Protocol Reminders:** Access pre-set reminders for a limited selection of foundational daily protocols (e.g., Morning Sunlight Exposure).
20: *   **Limited Content Access:** View short summaries and brief explanations for the foundational protocols available in the free tier.
21: *   **Basic Personal Notes:** Take simple personal notes linked only to the free content/protocols.
22: *   **Introduction & Onboarding:** Guided introduction to the app's purpose and basic features.
23: 
24: **Premium Tier Features (Subscription Required):**
25: 
26: *   **Comprehensive Protocol Library & Reminders:**
27:     *   Access reminders and content for the *full range* of protocols covered in the podcast (Sleep, Focus, Fitness, Nutrition, Mental Health, etc.).
28:     *   Fully *customizable reminders* (timing, frequency, snooze, grouping).
29: *   **Full Content Access & Depth:**
30:     *   Access both *succinct summaries* and *detailed, long-form explanations* for all protocols.
31:     *   Step-by-step implementation guides and practical tips.
32:     *   Curated links to relevant resources or papers mentioned (where feasible).
33:     *   Distilled key takeaways ("epiphanic summaries") for episodes/protocols.
34: *   **Advanced Note-Taking & Community:**
35:     *   Unlimited personal note-taking across all content with advanced organization (tags, search).
36:     *   Ability to *publicly post notes/takeaways* linked to specific episodes (community sharing).
37:     *   Potential for structured community discussions around protocols (moderated).
38: *   **Tracking & Personalization:**
39:     *   Tools to *track adherence* and consistency with selected protocols.
40:     *   Visualizations of progress and streaks.
41:     *   Create *personalized routines* or "stacks" combining multiple protocols for specific goals.
42: *   **Offline Access:** Download content (summaries, guides, notes) for offline use.
43: *   **Early Access & Updates:** Receive new protocols, content, and features as they are released.
44: *   **Ad-Free Experience:** Guaranteed free from any advertising.
45: 
46: **5. Core Functionality/How it Works**
47: 
48: The app serves as a centralized hub for Huberman Lab protocol knowledge and implementation. It takes complex information from the podcast and transforms it into actionable steps through reminders and structured guides (basic access free, full access premium). It supports learning via layered content (summaries/detailed explanations) and facilitates habit formation through reminders and tracking tools (premium). Users can personalize their experience through notes (basic free, advanced/public premium) and tailor routines (premium).
49: 
50: **6. Unique Selling Proposition (USP)/Why This App?**
51: 
52: *   **Simplifies Implementation:** Makes applying scientifically-grounded protocols significantly easier and more consistent.
53: *   **Consolidated & Structured Resource:** Organizes vast amounts of podcast information into an accessible, actionable format.
54: *   **Facilitates Learning & Practice:** Allows users to learn the science while receiving practical guidance on implementation.
55: *   **Personalization & Tracking (Premium):** Enables users to tailor protocols to their goals and monitor their progress.
56: *   **Community Engagement (Premium):** Offers a platform for shared learning and insights among dedicated users.
57: 
58: **7. Monetization Strategy**
59: 
60: The app utilizes a **Freemium model**. Core functionality and limited content are available for free to ensure basic accessibility. Full access to all features, comprehensive content, advanced personalization, tracking, and community functions requires a **Premium Subscription** (offered on a monthly or annual basis). This model supports ongoing development, content updates, and app maintenance while providing significant value to dedicated users. Intrusive advertising or selling user data are explicitly avoided to maintain user trust and align with the app's wellness focus.
61: 
62: **8. Potential Future Features/Ideas (Based on Initial Notes)**
63: 
64: *   Incorporating relevant content and insights from experts associated with Andrew Huberman ("Band of Brothers and Sistas").
65: *   Continued distillation and addition of practices from related talks, interviews, and research papers.
66: 
67: **9. Technical Considerations (Based on Initial Notes)**
68: 
69: *   **Platform:** Primarily envisioned as a mobile application for iOS and Android platforms ("downloadable").
70: 
71: **10. User Considerations/Concerns Mentioned (Based on Initial Notes)**
72: 
73: *   **Habit Formation:** Awareness that over-reliance on reminders could potentially hinder conscious habit internalization (though the app aims to support, not replace, conscious effort).
74: *   **Accessibility:** The Freemium model aims to address financial accessibility concerns by providing core value for free, while the subscription funds the full, advanced feature set.
````

## File: app_documentation/architecture_pan.md
````markdown
  1: ---
  2: 
  3: **Final Architectural Plan (v3): Optimize Guide: Huberman Companion App (with Detailed Monetization Features)**
  4: 
  5: **1. Executive Summary of Architectural Proposal**
  6: 
  7: This document outlines the finalized technical architecture for the "Optimize Guide: Huberman Companion" mobile application, designed to support a **Freemium model with tiered Subscriptions (Monthly/Annual)**. The architecture facilitates distinct **Free** (limited foundational protocols/summaries, basic notes) and **Premium** (comprehensive library, customizable reminders, detailed content, advanced notes/community, tracking, offline access) feature sets. It employs a **Modular Monolith** backend (**Laravel/PHP**), **PostgreSQL 17** database, **Redis** cache/queues, and a **React Native** frontend. Communication uses a **RESTful API**. Deployment leverages managed **Laravel hosting (Forge/Vapor)**, with **Docker** for local development. Key architectural components include robust user subscription management, secure feature gating via API middleware, and integration with mobile In-App Purchase (IAP) systems.
  8: 
  9: **2. Analysis of App Requirements & Architectural Drivers**
 10: 
 11: *(Requirements updated to reflect specific tiered features)*
 12: 
 13: - **Content Delivery & Management:** Efficient storage, management, and delivery of structured content. **Access control based on subscription tier is critical:**
 14:     - *Free:* Limited protocol summaries/explanations.
 15:     - *Premium:* Full library access (all protocols, detailed explanations, implementation guides, research links, key takeaways).
 16: - **User Interaction & Data:** User authentication, creation of notes, potential public sharing. **Tiered feature access:**
 17:     - *Free:* Basic notes linked to free content only.
 18:     - *Premium:* Unlimited notes across all content, advanced organization, public notes/discussion features.
 19: - **Actionable Guidance & Reminders:** Reliable push notification system. **Tiered functionality:**
 20:     - *Free:* Pre-set, non-customizable reminders for a limited protocol set.
 21:     - *Premium:* Comprehensive, customizable reminders (timing, frequency, grouping) for all protocols, potential location awareness.
 22: - **Tracking & Personalization (Premium):** Tools for tracking adherence, progress visualization, and creating personalized protocol stacks.
 23: - **Offline Access (Premium):** Ability to download content and notes.
 24: - **Cross-Platform Mobile:** Target iOS and Android using React Native.
 25: - **Scalability:** Potential for significant user growth requires scalable reads, writes, notifications, and **efficient subscription/entitlement checks**.
 26: - **Maintainability & Evolvability:** Modular design to accommodate future content, features, and subscription changes.
 27: - **Development Efficiency:** Leverage Laravel/React Native.
 28: - **User Experience:** Responsive interface, clear distinction between free/premium, seamless upgrade process, **ad-free experience (Premium)**.
 29: - **Monetization:** Implement the defined Freemium model with secure payment processing and access control.
 30: 
 31: *Non-Functional Drivers:* Performance, Security (incl. Payment Security), Reliability, Cost-Effectiveness, User Trust & Transparency.
 32: 
 33: **3. Proposed Architecture Pattern(s)**
 34: 
 35: - **Recommendation:** **Modular Monolith** for the backend.
 36: - **Justification:** Remains suitable. Facilitates integrating subscription logic and **feature gating** within relevant modules (e.g., `Users`, `Billing`, domain-specific feature modules) while maintaining structure.
 37: 
 38: **4. Technology Stack Recommendation**
 39: 
 40: *(Highlighting feature gating aspects)*
 41: 
 42: - **Frontend (Mobile):**
 43:     - **Technology:** **React Native**
 44:     - **Justification:** Cross-platform. Requires **IAP libraries** (`react-native-iap`). UI must **conditionally render features/content/prompts** based on user subscription status received from the backend.
 45: - **Backend:**
 46:     - **Technology:** **Laravel (PHP 8.x+)**
 47:     - **Justification:** Rapid development. Needs integration with **payment gateways (Stripe/Paddle via SDKs, potentially Laravel Cashier)** and **server-side IAP receipt validation**. **Crucially, must implement robust feature gating mechanisms (e.g., Policies, Middleware, dedicated service classes) to enforce access based on user's active subscription plan.**
 48: - **Database:**
 49:     - **Technology:** **PostgreSQL 17**
 50:     - **Justification:** Robust storage. Schema includes `users`, `plans`, `subscriptions` tables to track user entitlements.
 51: - **Cache / Queues:**
 52:     - **Technology:** **Redis**
 53:     - **Justification:** Caching (API responses, **user entitlement flags**), efficient queue driver (notifications, post-payment processing).
 54: - **APIs & Communication:**
 55:     - **Technology:** **RESTful API over HTTPS**
 56:     - **Justification:** Standard communication. API endpoints serving premium features/data **must be protected by middleware** verifying active premium subscription status. Endpoints needed for fetching subscription offers, managing subscriptions (via provider portals or limited API), and **receiving payment webhooks**.
 57: - **Payment Processing:**
 58:     - **Recommendation:** **Stripe** or **Paddle**
 59:     - **Justification:** Handle subscription logic, compliance, SDKs, IAP integration.
 60: 
 61: **5. Data Model Considerations**
 62: 
 63: - **Core Entities:** `User`, `Episode`, `Protocol`, `Summary`, `Note`, `Plan`, `Subscription`, `ContentSource`. (Schema details provided previously).
 64: - **Feature Gating Logic:** Access checks will typically query the `subscriptions` table (joined with `users` and potentially `plans`) to verify if a user has an `active` subscription linked to a premium `Plan`. This logic resides primarily in the backend (API middleware/policies).
 65: - **Challenges:** Keeping local subscription status synced accurately; handling complex subscription states; efficiently querying entitlements for API requests.
 66: 
 67: **6. Scalability and Performance Strategy**
 68: 
 69: - **Horizontal Backend Scaling:** As before (Forge/Vapor). Optimize subscription checks (e.g., cache user's plan ID and status in Redis for TTL).
 70: - **Database Scaling:** As before.
 71: - **Caching:** Aggressively cache user permission/subscription status; cache `Plan` details; cache non-personalized content.
 72: - **Asynchronous Processing:** Use **Laravel Queues** for notifications, payment webhook processing, entitlement updates, subscription lifecycle emails.
 73: - **CDN:** As before.
 74: 
 75: **7. Security Considerations**
 76: 
 77: - **Authentication:** As before (Sanctum/Passport).
 78: - **Authorization:** **Critical.** Implement robust authorization (Laravel Middleware/Policies) verifying subscription status *before* granting access to premium API endpoints, features (e.g., creating > X notes, accessing detailed summaries), or data. Prevent client-side bypasses.
 79: - **Payment Security:** As before (Rely on providers, secure keys, server-side IAP validation, webhook security).
 80: - **Data Privacy:** As before.
 81: - **Input Validation:** As before.
 82: - **API Security:** As before.
 83: - **Dependency Management:** As before.
 84: 
 85: **8. Deployment Strategy & Infrastructure**
 86: 
 87: - **Cloud Provider / Deployment Management / DB / Cache:** As before (Forge/Vapor, Managed PostgreSQL/Redis).
 88: - **Local Development:** Docker setup remains the same.
 89: - **CI/CD:** As before. **Include tests specifically verifying feature gating logic for different user subscription states.**
 90: - **Webhooks:** As before (secure endpoints needed).
 91: - **Storage:** As before (S3/GCS, especially for potential offline content downloads in premium).
 92: 
 93: **9. Potential Challenges & Trade-offs**
 94: 
 95: *(Refined based on feature detail)*
 96: 
 97: - **Complexity of Subscription Logic & Syncing:** Remains the primary complexity driver.
 98: - **Robust Feature Gating Implementation:** Ensuring access control is correctly and consistently applied across all relevant features/endpoints requires careful implementation and testing. Mistakes here directly impact revenue and user trust.
 99: - **IAP Integration:** Remains complex due to platform specifics.
100: - **Content Pipeline:** Remains an operational challenge.
101: - **Monolith Rigidity:** Risk still exists if modularity isn't maintained.
102: - **Cross-Platform Nuances (React Native):** As before.
103: - **Notification Reliability:** As before.
104: - **User Experience:** **Maintaining a compelling free tier while clearly showcasing premium value without being intrusive is a key design challenge.** Smooth upgrade flow is vital.
105: 
106: **10. Recommendations for Next Steps**
107: 
108: 1. **Refine Feature Scope (Free vs. Premium):** *Considered complete based on provided input.*
109: 2. **Detailed Domain Modeling:** *Schema provided previously.* Create migrations.
110: 3. **API Contract Definition:** Define all endpoints, clearly marking which require premium access and how status is checked/returned.
111: 4. **Setup Local Docker Environment:** As before.
112: 5. **Choose & Configure Hosting/Payment:** As before. Set up plans matching the Free/Premium tiers in Stripe/Paddle and App Stores.
113: 6. **Implement Core Backend Logic:** Build Auth, basic CRUD, **subscription management (Cashier recommended)**, and **implement core feature gating middleware/policies based on the defined tiers.**
114: 7. **Frontend PoC (React Native):** Build core UI, **integrate IAP**, **implement conditional rendering based on subscription status**, basic purchase flow.
115: 8. **Implement Webhook Handling:** As before.
116: 9. **Content Strategy Definition:** As before.
117: 10. **Establish CI/CD Pipeline:** Include **feature gating tests**.
118: 
119: ---
120: 
121: This version provides a comprehensive architectural blueprint that directly addresses the specified Freemium model and its distinct feature tiers, ensuring the technical plan aligns with the business and product requirements.
````

## File: app_documentation/backend_implementation_todo.md
````markdown
  1: # Huberman App: Backend Implementation TODO Checklist (TDD Approach)
  2: 
  3: **Project Goal:** Implement the Laravel backend for the Huberman App, supporting a Freemium model, content delivery, user interactions, reminders, tracking, and subscription management, ready for production deployment.
  4: 
  5: **Development Approach:** Test-Driven Development (TDD) will be used. For each functional component, write tests *first* to define expected behavior, then implement the code to make the tests pass, and finally refactor.
  6: **COMMAND EXECUTION** Every command should be executed with 'docker-compose exec app' prefix.
  7: 
  8: **Legend:**
  9: *   `[ ]` - To Do
 10: *   `[x]` - Done
 11: *   `(TDD)` - Indicates steps where writing tests *before* implementation is paramount.
 12: 
 13: ---
 14: 
 15: ## Phase 1: Project Setup & Foundation (Milestone 1 & 2 Prep)
 16: 
 17: *   **Environment & Tooling:**
 18:     *   `[x]` Initialize Git repository.
 19:     *   `[x]` Install Laravel (`11.x`) using Composer (`composer create-project laravel/laravel huberman-app-backend`).
 20:     *   `[x]` Configure basic `.env` file for local development (App Name, Key, Debug, Log level, DB connection defaults).
 21:     *   `[x]` Create/Finalize Docker environment (`docker-compose.yml`) based on `infrastructure_devops_details.md` with services:
 22:         *   `[x]` PHP (`8.2+`) container + Dockerfile.
 23:         *   `[x]` Web Server (Nginx or Caddy) container + config.
 24:         *   `[x]` PostgreSQL (`17.x` or latest supported) container.
 25:         *   `[x]` Redis (`7.x`) container.
 26:         *   `[ ]` Node.js (LTS) container (optional, for build tools).
 27:     *   `[x]` Verify local Docker environment is running (`docker-compose up -d`) and accessible.
 28:     *   `[x]` Configure PHPUnit (`phpunit.xml`) for testing environment (e.g., separate test PG database connection in `.env.testing`).
 29:     *   `[x]` Establish coding standards (PSR-12 enforced, setup `laravel/pint`).
 30:     *   `[x]` Install & Configure SAST tools:
 31:         *   `[x]` Install `phpstan/phpstan`, `larastan/larastan`. Configure `phpstan.neon`.
 32:         *   `[x]` (Optional) Install `vimeo/psalm`. Configure `psalm.xml`.
 33:     *   `[x]` Run initial SAST checks to ensure baseline setup.
 34: 
 35: *   **Core Structure & Base Components:**
 36: *   `[x]` Define base module structure: Create `app/Modules/` directory and subdirectories (`Authentication`, `UserManagement`, `SubscriptionBilling`, `ContentManagement`, `ProtocolEngine`, `NotesService`, `CoreApi` - adjust as needed).
 37:     *   `[x]` Create base API test case (`tests/Feature/ApiTestCase.php`) setting common headers (Accept: application/json).
 38:     *   `[x]` Implement base API controller (`app/Modules/CoreApi/Http/Controllers/Api/BaseApiController.php`) with common methods/traits if needed.
 39:     *   `[x]` Implement standard API response structure/trait (e.g., `ApiResponseHelpers`) if deviating from simple resource responses.
 40:     *   `[x]` Configure API routing (`routes/api.php`): Set up version prefix (`/v1`) and include route files from modules.
 41: 
 42: ---
 43: 
 44: ## Phase 2: Core User & Authentication (Milestone 2 - TDD Focus)
 45: 
 46: *   **User Model & Migration:**
 47:     *   `[x]` (TDD) Write tests for `User` model creation, relationships (initially Subscription, Notes, Reminders, Tracking), attributes, fillable, hidden (`password`, `remember_token`), casts (`email_verified_at`), `$with` relations.
 48:     *   `[x]` Implement `create_users_table` migration based on `database_migrations_plan.md`. Ensure soft deletes, timestamps.
 49:     *   `[x]` Run migration (`php artisan migrate`).
 50:     *   `[x]` Implement `User` model (`app/Modules/UserManagement/Models/User.php`) extending Authenticatable.
 51:     *   `[x]` Ensure User model tests pass.
 52: 
 53: *   **Authentication (Sanctum):**
 54:     *   `[x]` Install Laravel Sanctum (`composer require laravel/sanctum`). Publish migrations & config.
 55:     *   `[x]` Run Sanctum migrations (`php artisan migrate`).
 56:     *   `[x]` Add `HasApiTokens` trait to `User` model.
 57:     *   `[x]` Configure Sanctum (token expiry, domains) in `config/sanctum.php` and `.env`.
 58: 
 59: *   **Registration:**
 60:     *   `[x]` (TDD) Write API tests for `POST /api/v1/register`: Validation rules, success (DB check, 201, user+token response), email uniqueness.
 61:     *   `[x]` Implement `RegisterRequest` Form Request (`app/Modules/Authentication/Http/Requests/`).
 62:     *   `[x]` Implement `AuthController::register` method (`app/Modules/Authentication/Http/Controllers/`).
 63:     *   `[x]` Define route in module's API routes file. Ensure tests pass.
 64: 
 65: *   **Login:**
 66:     *   `[x]` (TDD) Write API tests for `POST /api/v1/login`: Validation rules, success (correct credentials -> 200, user+token), failure (incorrect credentials -> 401/422).
 67:     *   `[x]` Implement `LoginRequest` Form Request.
 68:     *   `[x]` Implement `AuthController::login` method.
 69:     *   `[x]` Define route. Ensure tests pass.
 70: 
 71: *   **Logout:**
 72:     *   `[x]` (TDD) Write API tests for `POST /api/v1/logout` (authenticated): Successful logout (token invalid, 204), unauthenticated access (401).
 73:     *   `[x]` Implement `AuthController::logout` method (invalidate current token).
 74:     *   `[x]` Define route, protected by `auth:sanctum`. Ensure tests pass.
 75: 
 76: *   **Authenticated User Endpoint:**
 77:     *   `[x]` (TDD) Write API tests for `GET /api/v1/user/profile` (authenticated): Fetches user data, unauthenticated access (401).
 78:     *   `[x]` Implement `UserController::profile` (`app/Modules/UserManagement/Http/Controllers/`).
 79:     *   `[x]` Define route, protected by `auth:sanctum`. Ensure tests pass.
 80: 
 81: *   **Password Reset:**
 82:     *   `[x]` Configure Mail driver for local testing (e.g., Mailtrap, Log driver in `.env`).
 83:     *   `[x]` (TDD) Test Forgot Password (`POST /api/v1/forgot-password`): Validation (email exists), success response, mock `Notification::send`.
 84:     *   `[x]` (TDD) Test Reset Password (`POST /api/v1/reset-password`): Validation (token, email, password, confirmation), successful reset, token consumed/invalidated.
 85:     *   `[x]` Implement necessary Controllers (`ForgotPasswordController`, `NewPasswordController`), Requests, Notifications (`ResetPasswordNotification`).
 86:     *   `[ ]` Define password reset routes. Ensure tests pass.
 87: 
 88: *   **Security Controls:**
 89:     *   `[x]` (TDD) Write tests for rate limiting on auth endpoints (`login`, `register`, `forgot-password`).
 90:     *   `[x]` Apply Laravel's default rate limiting middleware to auth routes in `RouteServiceProvider` or route definitions. Configure limits (e.g., in `.env`). Ensure tests pass.
 91: 
 92: ---
 93: 
 94: ## Phase 3: Subscription & Billing Foundation (Milestone 4 Prep - TDD Focus)
 95: 
 96: *   **Models & Migrations:**
 97:     *   `[x]` Implement `create_plans_table` migration. Run migration.
 98:     *   `[x]` Implement `create_subscriptions_table` migration (FKs, indexes, onDelete). Run migration.
 99:     *   `[x]` (TDD) Test `Plan` model (attributes, factory, maybe `isActive` scope). Implement model (`app/Modules/SubscriptionBilling/Models/Plan.php`).
100:     *   `[x]` (TDD) Test `Subscription` model (attributes, relationships `User`/`Plan`, casts, scopes like `active()`, `trialing()`). Implement model (`app/Modules/SubscriptionBilling/Models/Subscription.php`).
101:     *   `[x]` Add `hasMany(Subscription::class)` relationship to `User` model.
102: 
103: *   **Cashier Integration (Stripe):**
104:     *   `[x]` Install Laravel Cashier Stripe (`composer require laravel/cashier`). Publish migrations & config.
105:     *   `[x]` Run Cashier migrations (`php artisan migrate`).
106:     *   `[x]` Configure Cashier (`config/cashier.php`, `services.stripe.key/secret/webhook_secret` in `.env`). Set User model.
107:     *   `[x]` Add `Billable` trait to `User` model.
108: 
109: *   **Core Service & API Stubs:**
110:     *   `[x]` Define `SubscriptionServiceInterface` contract (`app/Modules/SubscriptionBilling/Contracts/`) with key methods (`userHasActivePremiumSubscription`, `getUserPlan`, `handleWebhook`, `getSubscriptionStatus`, etc.).
111:     *   `[x]` Implement basic `SubscriptionService` class (`app/Modules/SubscriptionBilling/Services/`) implementing the interface (methods return defaults/throw `NotImplementedException`).
112:     *   `[x]` Bind interface to implementation in a service provider (`SubscriptionBillingServiceProvider`).
113:     *   `[ ]` **Plans API:**
114:         *   `[x]` Seed `Plans` table (Free, Premium Monthly, Premium Annual) using a `PlanSeeder`.
115:         *   `[x]` (TDD) API Test `GET /api/v1/plans`: Assert returns seeded plans (200 OK).
116:         *   `[x]` Implement `SubscriptionController::plans` endpoint to fetch and return `Plan` data. Use an API Resource (`PlanResource`). Define route.
117:     *   `[ ]` **User Subscription API:**
118:         *   `[x]` (TDD) API Test `GET /api/v1/user/subscription` (authenticated): Assert returns null/empty initially (200 OK).
119:         *   `[x]` Implement `SubscriptionController::userSubscription` using `SubscriptionService` stub. Use an API Resource (`SubscriptionResource`). Define route protected by `auth:sanctum`.
120: 
121: *   **Webhook Foundation (Stripe):**
122:     *   `[x]` Implement `VerifyStripeWebhookSignature` middleware (or use Cashier's built-in route protection).
123:     *   `[x]` (TDD) Write test for signature verification middleware/logic (mock Stripe request/header/secret). Assert pass/fail scenarios.
124:     *   `[x]` Implement `WebhookController` (`app/Modules/SubscriptionBilling/Http/Controllers/`) with `handleStripeWebhook` method.
125:     *   `[x]` Define `POST /api/webhooks/stripe` route (ensure CSRF protection is disabled for this route). Apply signature verification middleware.
126:     *   `[x]` Ensure verification tests pass.
127: 
128: ---
129: 
130: ## Phase 4: Basic Content Management (Milestone 3 & 5 Prep)
131: 
132: *   **Models & Migrations:**
133:     *   `[x]` Implement `create_episodes_table` migration. Run migration.
134:     *   `[x]` Implement `create_protocols_table` migration. Run migration.
135:     *   `[x]` Implement `create_summaries_table` migration. Run migration.
136:     *   `[x]` Implement `create_episode_protocol_table` (pivot) migration. Run migration.
137:     *   `[x]` (TDD) Test `Episode` model (attributes, relationships `Protocols`/`Summaries`/`Notes`). Implement model (`app/Modules/ContentManagement/Models/Episode.php`).
138:     *   `[x]` (TDD) Test `Protocol` model (attributes, relationships `Episodes`). Implement model (`app/Modules/ContentManagement/Models/Protocol.php`).
139:     *   `[x]` (TDD) Test `Summary` model (attributes, relationship `Episode`). Implement model (`app/Modules/ContentManagement/Models/Summary.php`).
140:     *   `[x]` Test `Episode<->Protocol` many-to-many relationship.
141: 
142: *   **Seeding:**
143:     *   `[x]` Create `EpisodeSeeder` (placeholder episodes).
144:     *   `[x]` Create `ProtocolSeeder` (foundational protocols based on `content_strategy_management.md`).
145:     *   `[x]` Create `SummarySeeder` (summaries for foundational protocols).
146:     *   `[x]` Create `EpisodeProtocolSeeder` (link placeholders).
147:     *   `[x]` Update `DatabaseSeeder` to call new seeders in correct order.
148:     *   `[ ]` Run seeders (`php artisan db:seed`).
149: 
150: *   **Core Service & API:**
151:     *   `[x]` Define `ContentServiceInterface` contract (`app/Modules/ContentManagement/Contracts/`) (e.g., `getProtocols`, `getProtocolDetails`, `getEpisodes`, `getEpisodeDetails`, `getSummariesForEpisode`).
152:     *   `[x]` Implement basic `ContentService` implementing the interface. Bind interface.
153:     *   `[x]` Implement API Resources (`EpisodeResource`, `ProtocolResource`, `SummaryResource`).
154:     *   `[x]` **Protocols API:**
155:         *   `[x]` (TDD) API Test `GET /api/v1/protocols`: List protocols (unauthenticated).
156:         *   `[x]` Implement `ProtocolController::index`. Define route.
157:         *   `[x]` (TDD) API Test `GET /api/v1/protocols/{id}`: Show protocol details (unauthenticated).
158:         *   `[x]` Implement `ProtocolController::show`. Define route.
159:     *   `[x]` **Episodes API:**
160:         *   `[x]` (TDD) API Test `GET /api/v1/episodes`: List episodes.
161:         *   `[x]` Implement `EpisodeController::index`. Define route.
162:         *   `[x]` (TDD) API Test `GET /api/v1/episodes/{id}`: Show episode details.
163:         *   `[x]` Implement `EpisodeController::show`. Define route.
164:     *   `[x]` *(Add similar for Summaries if needed as top-level endpoint)*
165:     *   `[x]` Ensure basic content API tests pass.
166: 
167: ---
168: 
169: ## Phase 5: Feature Gating Implementation (Milestone 4 & 5 - TDD Focus)
170: 
171: *   **Subscription Service Logic:**
172:     *   `[x]` (TDD - Unit) Test `SubscriptionService::userHasActivePremiumSubscription` covering scenarios: no sub, free plan, active premium, trialing premium, canceled (before/after `ends_at`), expired, past_due. Use factories.
173:     *   `[x]` Implement logic in `SubscriptionService` querying `subscriptions` table (via User relationship), joining `plans`, checking status (`active`, `trialing`), `ends_at`. Ensure 'premium' plan type check.
174:     *   `[x]` (TDD - Unit) Test caching: cache hit avoids DB query, miss populates cache, TTL works, cache clear invalidates.
175:     *   `[x]` Implement caching layer within `userHasActivePremiumSubscription` (e.g., `Cache::remember`). Use appropriate cache tags (e.g., `user:{id}`).
176: 
177: *   **Middleware:**
178:     *   `[x]` Implement `CheckPremiumAccess` middleware using `SubscriptionServiceInterface`. # Assuming done as file exists
179:     *   `[x]` (TDD - Feature) Write feature tests applying middleware to a test route: premium user passes (200), free user fails (403), unauthenticated fails (401 - handled by `auth:sanctum`).
180:     *   `[x]` Register middleware alias in `app/Http/Kernel.php`. (Updated in bootstrap/app.php for L11)
181:     *   `[ ]` Apply middleware to relevant premium API route groups (e.g., start with `/reminders`, `/tracking`). Ensure tests pass. (Pending creation of relevant routes)
182: 
183: *   **Gated Content API:**
184:     *   `[x]` Refine `ProtocolResource` to conditionally include `implementation_guide` based on `$request->user()->hasActivePremiumSubscription()` (or similar check).
185:     *   `[x]` (TDD - Feature) Test `GET /api/v1/protocols/{id}`: Authenticated free user gets protocol *without* `implementation_guide`. Authenticated premium user gets protocol *with* `implementation_guide`.
186:     *   `[x]` Refactor `ProtocolController` or `ContentService` if needed to support different data loading based on user status (API Resource often sufficient). Ensure tests pass.
187: 
188: ---
189: 
190: ## Phase 6: Full Subscription Lifecycle via Webhooks (Milestone 4 - TDD Focus)
191: 
192: *   **Webhook Processing Logic (Stripe via Cashier):**
193:         *   **Event: `checkout.session.completed`**
194:         *   `[x]` (TDD) Test: Simulates webhook, asserts `Subscription` created (`trialing`/`active`), `ends_at`/`trial_ends_at` set, `SubscriptionStarted` event dispatched, `User.stripe_id` updated.
195:         *   `[x]` Verify/Implement Cashier listener logic.
196:     *   **Event: `customer.subscription.updated` (Trial Ends -> Active - via `invoice.payment_succeeded`)**
197:         *   `[x]` (TDD) Test: Simulates `invoice.payment_succeeded` post-trial, asserts status -> `active`, `trial_ends_at` nullified, `ends_at` updated.
198:         *   `[x]` Verify Cashier listener.
199:     *   **Event: `invoice.payment_succeeded` (Renewal)**
200:         *   `[x]` (TDD) Test: Simulates webhook, asserts `Subscription.ends_at` updated, `SubscriptionRenewed` event dispatched.
201:         *   `[x]` Verify Cashier listener.
202:     *   **Event: `invoice.payment_failed`**
203:         *   `[x]` (TDD) Test: Simulates webhook, asserts `Subscription.status` -> `past_due` (if configured), `PaymentFailed` event dispatched.
204:         *   `[x]` Verify/Implement Cashier listener based on retry settings.
205:     *   **Event: `customer.subscription.updated` (Cancel at Period End)**
206:         *   `[x]` (TDD) Test: Simulates webhook (`cancel_at_period_end=true`), asserts `Subscription.status` updated (`canceled`?), `ends_at` reflects cancel date, `SubscriptionCanceled` event dispatched.
207:         *   `[x]` Verify Cashier listener (`onSubscriptionUpdated`).
208:     *   **Event: `customer.subscription.deleted` (Immediate Cancel / Final Failure)**
209:         *   `[x]` (TDD) Test: Simulates webhook, asserts status -> `canceled`/`expired`, `ends_at` set to past/now, `SubscriptionExpired`/`SubscriptionCanceled` event dispatched.
210:         *   `[x]` Verify Cashier listener.
211: 
212: *   **Webhook Processing Logic (Apple IAP - Server Notifications V2):**
213:     *   `[x]` Implement `WebhookController::handleAppleWebhook`.
214:     *   `[x]` Implement service/logic to decode & verify Apple JWS payload (use library if available).
215:     *   `[x]` Define `POST /api/webhooks/apple` route (disable CSRF).
216:     *   `[x]` Implement App Store Server API client (library?) for server-side validation (optional).
217:     *   `[x]` **Event: `SUBSCRIBED` / `DID_RENEW`:** Implement handler, (TDD) Test state -> `active`/`trialing`, update DB, dispatch events.
218:     *   `[x]` **Event: `DID_FAIL_TO_RENEW`:** Implement handler, (TDD) Test state -> `past_due`/`expired`, update DB, dispatch events.
219:     *   `[ ]` **Event: `EXPIRED`:** Implement handler, (TDD) Test state -> `expired`, update DB, dispatch event.
220:     *   `[ ]` *(Implement/Test other handlers: `GRACE_PERIOD_EXPIRED`, `REVOKED`)* TO CHECK
221: 
222: *   **Webhook Processing Logic (Google Play Billing - RTDN via Pub/Sub):**
223:     *   `[ ]` Set up Google Cloud Pub/Sub topic & push subscription.
224:     *   `[x]` Implement `WebhookController::handleGoogleWebhook` (Mock).
225:     *   `[x]` Implement service/logic to decode base64 Pub/Sub data.
226:     *   `[x]` (TDD) Test Pub/Sub message decoding & parsing.
227:     *   `[x]` Define `POST /api/webhooks/google` route (disable CSRF).
228:     *   `[x]` Implement Google Play Developer API client (library?) for purchase validation/acknowledgement (Mock).
229:     *   `[x]` **Type: `SUBSCRIPTION_PURCHASED` / `SUBSCRIPTION_RENEWED`:** Implement handler, (TDD) Test state -> `active`/`trialing`, update DB, dispatch events, acknowledge purchase (Mock).
230:     *   `[x]` **Type: `SUBSCRIPTION_IN_GRACE_PERIOD`:** Implement handler, (TDD) Test state -> `past_due`, update DB, dispatch event (Mock).
231:     *   `[x]` **Type: `SUBSCRIPTION_ON_HOLD`:** Implement handler, (TDD) Test state -> `past_due`/`on_hold`, update DB (Mock).
232:     *   `[x]` **Type: `SUBSCRIPTION_CANCELED`:** Implement handler, (TDD) Test state -> `canceled`, update DB, dispatch event (Mock).
233:     *   `[x]` **Type: `SUBSCRIPTION_EXPIRED`:** Implement handler, handler, (TDD) Test state -> `expired`, update DB, dispatch event (Mock).
234:     *   `[ ]` *(Implement/Test other handlers: `REVOKED`, `PAUSED`)* (Mock)
235: 
236: *   **Scheduled Job for Status Check:**
237:     *   `[ ]` Implement `CheckExpiredSubscriptions` job/command.
238:     *   `[ ]` (TDD) Test job finds past `canceled` subs and sets status to `expired`.
239:     *   `[x]` Schedule job in `Kernel.php` (e.g., `daily()`).
240: 
241: *   **Cache Invalidation:**
242:     *   `[x]` Create `ClearUserEntitlementCache` Listener.
243:     *   `[x]` Implement cache clearing logic (`Cache::tags("user:{$event->subscription->user_id}")->flush();` or similar).
244:     *   `[x]` (TDD) Test Listener clears the correct cache tag/key.
245:     *   `[x]` Register Listener for `SubscriptionStarted`, `SubscriptionRenewed`, `SubscriptionCanceled`, `SubscriptionExpired` events in `EventServiceProvider`.
246:     *   `[x]` (TDD) Verify webhook tests dispatch events correctly using `Event::fake()`.
247: 
248: ---
249: 
250: ## Phase 7: Implementing MVP Features (Milestone 5 & 6 Prep)
251: 
252: *   **Free Tier - Basic Reminders:**
253:     *   `[x]` Implement logic/scope in `Protocol` model to identify foundational protocols.
254:     *   `[x]` Implement `SendFoundationalReminders` command/job.
255:     *   `[x]` (TDD) Test command selects correct protocols & users (mock Notification).
256:     *   `[x]` Schedule command in `Kernel.php`.
257: 
258: *   **Premium Tier - Full Content Access:**
259:     *   `[x]` (TDD - Feature) Ensure `ProtocolResource` tests cover conditional loading of `implementation_guide`.
260:     *   `[x]` (TDD - Feature) Ensure `GET /protocols` tests cover premium user getting full list / rich data via Resource.
261: 
262: *   **Premium Tier - Custom Reminders (MVP Scope):**
263:     *   **Database:**
264:         *   `[x]` Implement `create_user_reminders_table` migration. Run migration.
265:         *   `[x]` (TDD) Test `UserReminder` model attributes & relationships.
266:         *   `[x]` Implement `UserReminder` model (`app/Modules/ProtocolEngine/Models/`).
267:     *   **API CRUD:**
268:         *   `[x]` Implement `ReminderPolicy`.
269:         *   `[x]` (TDD) Test `ReminderPolicy` (premium check, ownership).
270:         *   `[x]` **Create:** (TDD) API Test, `[x]` Implement `StoreReminderRequest`, `ReminderController::store`, `ReminderService::setReminder`, Define Route + Middleware/Policy.
271:         *   `[x]` **List:** (TDD) API Test, Implement `ReminderController::index`, `ReminderService::getUserReminders`, Define Route + Middleware.
272:         *   `[x]` **Update:** (TDD) API Test, Implement `UpdateReminderRequest`, `ReminderController::update`, `ReminderService::updateReminder`, Define Route + Middleware/Policy.
273:         *   `[x]` **Delete:** (TDD) API Test, Implement `ReminderController::destroy`, `ReminderService::deleteReminder`, Define Route + Middleware/Policy.
274:     *   **Scheduling Logic:**
275:         *   `[x]` Implement `reminders:send-due` command logic (query, timezone conversion, frequency check).
276:         *   `[x]` (TDD) Test `reminders:send-due` command finds due reminders (mock `now()`).
277:         *   `[x]` Ensure command dispatches `SendProtocolReminderNotification` job.
278:         *   `[x]` Schedule command in `Kernel.php` (`everyMinute()`).
279:     *   **Notification Sending:**
280:         *   `[x]` Implement `SendProtocolReminderNotification` Job.
281:         *   `[x]` Implement `ProtocolReminder` Notification class (`toFcm`, `toApns`).
282:         *   `[x]` (TDD) Test Job retrieves data, fetches token, constructs payload, mocks `Notification::send()`.
283:         *   `[x]` Implement token fetching logic in Job.
284:         *   `[x]` Implement `Notification::send()` call in Job.
285:         *   `[x]` Implement `last_sent_at` update in Job.
286:     *   **Device Token Management:**
287:     *   `[x]` Add `device_tokens` column to `users` table OR create `user_devices` table migration. Run migration.
288:     *   `[ ]` (TDD) Test storing/retrieving tokens for a user.
289:     *   `[x]` Implement `UpdateDeviceTokenRequest`.
290:     *   `[x]` Implement `UserController::updateDeviceToken`.
291:     *   `[x]` Define `POST /api/v1/user/device-token` route + `auth:sanctum`.
292: 
293: ---
294: 
295: ## Phase 8: Implementing Post-MVP Features (As Prioritized - TDD Focus)
296: 
297: *   **Notes Service (Example):**
298:     *   `[x]` **Models & Migrations:** Implement `create_notes_table`, (TDD) Test `Note` Model, Implement Model.
299:     *   `[x]` **Policies & Auth:** Implement `NotePolicy`, (TDD) Test Policy (free limits, public premium, ownership).
300:     *   `[x]` **Service Layer:** Define Interface, Implement `NoteService`, Bind Interface, (TDD - Unit) Test Service methods (CRUD, counts, public list).
301:     *   `[x]` **API Endpoints:** Without running migrations and test executions
302:         *   `[x]` **Create:** (TDD) API Test, `[x]` Implement Request, `[x]` Implement Controller, `[x]` Define Route.
303:         *   `[x]` **List User:** (TDD) API Test, Implement Controller, Define Route.
304:         *   `[x]` **Show:** (TDD) API Test, Implement Controller, Define Route.
305:     *   `[x]` **Update:** (TDD) API Test, Implement Request, Controller, Define Route.
306:     *   `[x]` **Delete:** (TDD) API Test, Implement Controller, Define Route.
307:     *   `[x]` **List Public:** (TDD) API Test, Implement Controller, Define Route.
308: 
309: - [x] **Tracking Service (Placeholder - Apply same pattern):**
310:     -   `[x]` **Models & Migrations:** (TDD) Test `TrackingLog` Model, Implement Model.
311:     -   `[x]` **Policies & Auth:** Implement Policy (Premium check), (TDD) Test Policy.
312:     -   `[x]` **Service Layer:** Define Interface, Implement Service (streak logic), Bind, (TDD - Unit) Test Service methods (CRUD, counts, public list).
313:     -   `[x]` **API Endpoints:**
314:         *   `[x]` **Log Adherence:** (TDD) API Test, Implement Request, Controller, Define Route.
315:         *   `[x]` **Get Summary/Streak:** (TDD) API Test, Implement Controller, Define Route.
316:     -   Migration file created: database/migrations/2025_05_01_100004_create_user_protocol_tracking_table.php
317: 
318: -   **Offline Access:**
319:     -   `[x]` **Models & Migrations:** (TDD) Test `OfflineData` Model, Implement Model.
320:     -   `[x]` **Policies & Auth:** Implement Policy (User access), (TDD) Test Policy.
321:     -   `[x]` **Service Layer:** Define Interface, Implement Service (sync logic), Bind, (TDD - Unit) Test Service methods (CRUD, sync).
322:     -   `[x]` **API Endpoints:**
323:         -   `[x]` **Fetch Data:** (TDD) API Test, Implement Request, Controller, Define Route.
324:         -   `[x]` **Sync Data:** (TDD) API Test, Implement Request, Controller, Define Route.
325: 
326: -   **Advanced Notes Org:**
327:     -   `[x]` **Models & Migrations:** (TDD) Test `NoteTag` Model, Implement Model.
328:     -   `[x]` **Models & Migrations:** (TDD) Test `NoteCategory` Model, Implement Model.
329:     -   `[x]` **Policies & Auth:** Implement Policy (User access), (TDD) Test Policy.
330:     -   `[x]` **Service Layer:** Define Interface, Implement Service (categorization, tagging logic), Bind, (TDD - Unit) Test Service methods.
331:     -   `[x]` **API Endpoints:**
332:         *   `[x]` **Categorize Note:** (TDD) API Test, Implement Request, Controller, Define Route.
333:         *   `[x]` **Tag Note:** (TDD) API Test, Implement Request, Controller, Define Route.
334:         *   `[x]` **Get Notes by Category/Tag:** (TDD) API Test, Implement Request, Controller, Define Route.
335: 
336: -   **Community:**
337:     -   `[x]` **Models & Migrations:** (TDD) Test `Post`, `Comment` Models, Implement Models.
338:     -   `[x]` **Policies & Auth:** Implement Policy (User access, moderation), (TDD) Test Policy.
339:     -   `[x]` **Service Layer:** Define Interface, Implement Service (posting, commenting, moderation logic), Bind, (TDD - Unit) Test Service methods.
340:     -   `[x]` **API Endpoints:**
341:         *   `[x]` **Create Post:** (TDD) API Test, Implement Request, Controller, Define Route.
342:         *   `[x]` **Create Comment:** (TDD) API Test, Implement Request, Controller, Define Route.
343:         *   `[x]` **Get Posts/Comments:** (TDD) API Test, Implement Controller, Define Route.
344:         *   `[x]` **Moderate Content:** (TDD) API Test, Implement Controller, Define Route.
345: 
346: -   **Routines:**
347:     -   `[x]` **Models & Migrations:** (TDD) Test `Routine`, `RoutineStep` Models, Implement Models.
348:     -   `[x]` **Policies & Auth:** Implement Policy (User access), (TDD) Test Policy.
349:     *   `[x]` **Service Layer:** Define Interface, Implement Service (routine execution, scheduling logic), Bind, (TDD - Unit) Test Service methods.
350:     *   `[x]` **API Endpoints:**
351:         *   `[x]` **Create Routine:** (TDD) API Test, Implement Request, Controller, Define Route.
352:         *   `[x]` **Execute Routine:** (TDD) API Test, Implement Request, Controller, Define Route.
353:         *   `[x]` **Get Routines:** (TDD) API Test, Implement Controller, Define Route.
354: 
355: 
356: *   *(Repeat pattern for other Post-MVP features like Offline Access, Advanced Notes Org, Community, Routines)*
357: 
358: ---
359: 
360: ## Phase 9: API Documentation & Refinement
361: 
362: *   **Setup:**
363:     *   `[ ]` Install & Configure `zircote/swagger-php` OR choose manual editing tool.
364: *   **Annotation/Manual Update:**
365:     *   `[ ]` Review `openapi.yaml` structure.
366:     *   `[ ]` Annotate/Document: `Authentication` module endpoints & schemas.
367:     *   `[ ]` Annotate/Document: `UserManagement` module endpoints & schemas.
368:     *   `[ ]` Annotate/Document: `SubscriptionBilling` module endpoints & schemas (incl. webhooks).
369:     *   `[ ]` Annotate/Document: `ContentManagement` module endpoints & schemas (note premium diffs).
370:     *   `[ ]` Annotate/Document: `NotesService` module endpoints & schemas (note premium diffs).
371:     *   `[ ]` Annotate/Document: `ProtocolEngine` module endpoints & schemas (premium).
372:     *   `[ ]` Define/Review: Reusable schemas in `components/schemas`.
373:     *   `[ ]` Define/Review: Reusable error responses in `components/responses`.
374:     *   `[ ]` Define/Review: Security schemes (`bearerAuth`) and apply.
375: *   **Generation & Validation:**
376:     *   `[ ]` Generate `openapi.yaml`.
377:     *   `[ ]` Validate `openapi.yaml` using validator tool. Fix errors.
378: *   **Commit:**
379:     *   `[ ]` Commit final, validated `openapi.yaml` to repository.
380: 
381: ---
382: 
383: ## Phase 10: Testing & Quality Assurance
384: 
385: *   **Test Coverage Review:**
386:     *   `[ ]` Generate PHPUnit code coverage report.
387:     *   `[ ]` Analyze report, identify gaps in critical modules.
388:     *   `[ ]` Write additional unit/integration tests to improve coverage.
389: *   **Integration Flow Testing:**
390:     *   `[ ]` (TDD - Feature) Test Flow: Registration -> Login.
391:     *   `[ ]` (TDD - Feature) Test Flow: Free User Access (Check premium endpoint access denied).
392:     *   `[ ]` (TDD - Feature) Test Flow: Subscription Upgrade (Simulated webhook -> Premium access granted).
393:     *   `[ ]` (TDD - Feature) Test Flow: Reminder Setting & Receiving (Simulated: Create reminder -> Time passes -> Job runs -> Mock Notification sent).
394: *   **Manual QA:**
395:     *   `[ ]` Develop manual test cases/checklist (Free & Premium flows).
396:     *   `[ ]` Execute manual tests on Staging.
397:     *   `[ ]
````

## File: app_documentation/component_breakdown.md
````markdown
  1: **Huberman App: Backend Component Breakdown (Modular Monolith)**
  2: 
  3: **1. Introduction**
  4: 
  5: This document details the proposed modular structure for the Huberman App's Laravel backend, following the Modular Monolith pattern outlined in the architecture and implementation plan (`architecture_pan.md`, `detailed_plan.md`). The goal is to organize the codebase into distinct, domain-focused modules (represented as namespaces/folders within the `app/` directory) to improve maintainability, scalability, and clarity of responsibilities. While running as a single application, these logical boundaries help manage complexity as the application grows.
  6: 
  7: Each module will encapsulate its specific domain logic, including Models, Controllers (for API endpoints related to the module), Services, Events, Listeners, Policies, Requests, etc.
  8: 
  9: **2. Proposed Backend Modules**
 10: 
 11: The initial set of proposed modules, located under `app/Modules/`, are:
 12: 
 13: *   **`app/Modules/Authentication`**
 14:     *   **Responsibilities:** Handles user registration, login (authentication), password reset functionality, API token issuance and potentially revocation (e.g., integrating Laravel Sanctum or Passport).
 15:     *   **Key Components:**
 16:         *   `Http/Controllers/AuthController.php` (Handles API login, register, logout, etc.)
 17:         *   `Http/Controllers/PasswordResetController.php` (Handles password reset flow)
 18:         *   `Http/Requests/LoginRequest.php`, `RegisterRequest.php`
 19:         *   Potentially `Services/AuthService.php` for complex logic.
 20:         *   Related Routes definition.
 21:         *   Authentication-related Middleware (e.g., `EnsureTokenIsValid`).
 22: 
 23: *   **`app/Modules/UserManagement`**
 24:     *   **Responsibilities:** Manages user data beyond authentication, such as profile information (name, potentially picture), user settings, and serves as the owner of the core `User` model. It collaborates with `SubscriptionBilling` to understand a user's access level.
 25:     *   **Key Components:**
 26:         *   `Models/User.php` (The core Eloquent User model)
 27:         *   `Http/Controllers/UserController.php` (API for fetching/updating user profile)
 28:         *   `Http/Requests/UpdateProfileRequest.php`
 29:         *   `Services/UserService.php`
 30:         *   `Policies/UserPolicy.php` (Authorization for profile actions)
 31:         *   Database migrations for the `users` table.
 32: 
 33: *   **`app/Modules/SubscriptionBilling`**
 34:     *   **Responsibilities:** Manages subscription plans (`Plan` model), tracks user subscriptions (`Subscription` model), integrates with payment providers (Stripe/Paddle via Cashier), handles incoming webhooks for payment events (success, failure, cancellation), and provides the core logic for checking a user's subscription status and entitlements (feature gating).
 35:     *   **Key Components:**
 36:         *   `Models/Plan.php`
 37:         *   `Models/Subscription.php`
 38:         *   `Http/Controllers/SubscriptionController.php` (API for fetching plans, potentially initiating checkout flows)
 39:         *   `Http/Controllers/WebhookController.php` (Handles Stripe/Paddle/Apple/Google webhooks)
 40:         *   `Services/BillingService.php` or `SubscriptionService.php` (Core logic for status checks, webhook processing)
 41:         *   `Policies/SubscriptionPolicy.php` or Middleware (e.g., `CheckPremiumAccess`) - *Crucial for Feature Gating*.
 42:         *   Listeners for Cashier events (if applicable).
 43:         *   Database migrations for `plans`, `subscriptions` tables.
 44: 
 45: *   **`app/Modules/ContentManagement`**
 46:     *   **Responsibilities:** Manages the core application content: Podcast Episodes, Protocols, Summaries, Key Takeaways. Includes logic for creating, retrieving, updating, and deleting this content (potentially via admin interfaces or seeders) and exposing it through the API, respecting access levels determined by `SubscriptionBilling`.
 47:     *   **Key Components:**
 48:         *   `Models/Episode.php`, `Protocol.php`, `Summary.php`
 49:         *   `Http/Controllers/EpisodeController.php` (API for episodes)
 50:         *   `Http/Controllers/ProtocolController.php` (API for protocols)
 51:         *   `Http/Controllers/SummaryController.php` (API for summaries)
 52:         *   `Services/ContentService.php` (May handle complex queries or formatting)
 53:         *   Database migrations for `episodes`, `protocols`, `summaries`, `episode_protocol` tables.
 54:         *   Potentially Resource Collections for API responses.
 55: 
 56: *   **`app/Modules/ProtocolEngine`**
 57:     *   **Responsibilities:** Handles the *application* of protocols, primarily focusing on the reminder and tracking features (Premium). Includes logic for setting/managing user-defined reminders, scheduling notifications, and recording user adherence to protocols.
 58:     *   **Key Components:**
 59:         *   `Http/Controllers/ReminderController.php` (API for CRUD operations on user reminders - Premium)
 60:         *   `Http/Controllers/TrackingController.php` (API for logging protocol adherence - Premium)
 61:         *   `Services/ReminderService.php` (Logic for scheduling/managing reminders)
 62:         *   `Services/TrackingService.php` (Logic for recording/calculating adherence, streaks)
 63:         *   Potentially `Models/UserReminder.php`, `Models/ProtocolTrack.php`
 64:         *   Related `Jobs` (e.g., `SendProtocolReminderNotification`) pushed to the queue.
 65:         *   Console Commands (e.g., for queue workers, potentially scheduling checks).
 66:         *   Policies/Middleware to ensure only Premium users can access these features.
 67: 
 68: *   **`app/Modules/NotesService`**
 69:     *   **Responsibilities:** Manages user-created notes linked to episodes. Handles CRUD operations, public/private status, and potentially organization features (tags, search - likely Premium).
 70:     *   **Key Components:**
 71:         *   `Models/Note.php`
 72:         *   `Http/Controllers/NoteController.php` (API for note CRUD)
 73:         *   `Services/NoteService.php`
 74:         *   `Policies/NotePolicy.php` (Ensures users can only manage their own notes, checks Premium status for advanced features like unlimited notes or public sharing).
 75:         *   Database migrations for the `notes` table.
 76: 
 77: *   **`app/Modules/CommunityFeatures`** (If implemented early)
 78:     *   **Responsibilities:** Focuses on features involving multiple users interacting, such as viewing public notes associated with episodes or potential discussion forums. Relies heavily on `NotesService` (for public notes) and `SubscriptionBilling` (access control).
 79:     *   **Key Components:**
 80:         *   `Http/Controllers/PublicContentController.php` (API for fetching public notes, etc.)
 81:         *   Services related to fetching/aggregating community content.
 82:         *   Policies/Middleware enforcing Premium access if applicable.
 83: 
 84: *   **`app/Modules/CoreApi`** (Potentially minimal or evolves to `SharedKernel`)
 85:     *   **Responsibilities:** This module might be less domain-specific. Initially, it could house base API controllers, shared API traits (e.g., for standardized responses), common API middleware registration, or core exception handling for the API. Alternatively, these elements might be placed directly in `app/Http` or `app/Providers`, and this module could evolve into a `SharedKernel` for truly cross-cutting domain logic (e.g., shared interfaces, base service classes) not tied to a specific module *or* the HTTP layer. API controllers for specific domains (`User`, `Content`, `Note`, etc.) reside within their respective modules (`UserManagement`, `ContentManagement`, `NotesService`).
 86:     *   **Key Components (Potential):**
 87:         *   `Http/Controllers/Api/BaseApiController.php`
 88:         *   `Traits/ApiResponseHelpers.php`
 89:         *   Centralized API middleware registration logic (if not in `app/Http/Kernel.php`).
 90: 
 91: **3. Interactions**
 92: 
 93: Modules will interact primarily through:
 94: *   **Service Classes:** Injecting services from one module into another (e.g., `NotePolicy` using `SubscriptionService` to check status).
 95: *   **Events and Listeners:** Decoupled communication (e.g., `SubscriptionBilling` firing `SubscriptionActivated` event, listened to by `UserManagement` or `ProtocolEngine`).
 96: *   **Eloquent Relationships:** Defined on Models (e.g., `User` hasMany `Subscription`).
 97: 
 98: **4. Conclusion**
 99: 
100: This modular breakdown provides a structured approach to developing the Laravel backend. It aims to create clear boundaries between different functional areas of the application, facilitating parallel development, easier testing, and long-term maintainability, while still benefiting from the simplicity of a single deployment unit (monolith).
````

## File: app_documentation/component_interfaces_interactions.md
````markdown
  1: **Huberman App: Backend Component Interfaces & Interactions**
  2: 
  3: **1. Introduction**
  4: 
  5: Following the definition of backend modules in `component_breakdown.md`, this document specifies the interfaces, contracts, and primary interaction patterns between these modules within the Laravel Modular Monolith. The goal is to ensure loose coupling where appropriate, define clear responsibilities, and illustrate how data and control flow, particularly for critical cross-cutting concerns like subscription-based feature gating.
  6: 
  7: **2. Primary Interaction Mechanisms**
  8: 
  9: Modules within the backend will primarily interact using standard Laravel patterns designed to promote maintainability and testability:
 10: 
 11: *   **Dependency Injection (DI) & Service Interfaces:** The preferred method for direct inter-module communication. Modules will define interfaces (contracts) for their core services. Other modules will type-hint these interfaces in their constructors or methods, allowing Laravel's service container to inject the concrete implementation. This decouples the modules.
 12: *   **Events and Listeners:** Used for broadcasting significant state changes or actions without requiring the originating module to know about all interested parties. For example, when a subscription status changes, an event can be fired, and multiple listeners in different modules can react accordingly (e.g., clearing caches, enabling/disabling features).
 13: *   **Middleware:** Used primarily for cross-cutting concerns applied at the HTTP request level, notably for authentication (handled by `Authentication` module's logic) and authorization/feature gating (checking subscription status via `SubscriptionBilling` module's logic before allowing access to specific API routes/controllers).
 14: *   **Policies:** Used for fine-grained authorization logic, often related to specific Eloquent models. Policies within a module (e.g., `NotePolicy` in `NotesService`) can leverage services from other modules (like `SubscriptionBilling`) to make authorization decisions.
 15: *   **Eloquent Relationships:** Models defined within modules will use standard Eloquent relationships (`hasMany`, `belongsTo`, etc.) to interact with models in other modules where direct data relationships exist (e.g., `User` model in `UserManagement` has many `Subscription` models in `SubscriptionBilling`).
 16: 
 17: **3. Key Module Interfaces & Service Contracts**
 18: 
 19: Here are *examples* of key interfaces or service methods that modules might expose or consume. Concrete implementations will reside within the respective modules.
 20: 
 21: *   **`Authentication` Module:**
 22:     *   *Primarily Consumed:* Consumes `UserManagement` services/models for user lookup/creation.
 23:     *   *Exposes:* Less direct service interfaces, more functionality via controllers and standard Laravel Auth mechanisms (e.g., `Auth::user()`).
 24:     *   *Fires Events:* `UserRegistered`, `UserLoggedIn`, `PasswordResetRequested`.
 25: 
 26: *   **`UserManagement` Module:**
 27:     *   *Exposes:*
 28:         *   `App\Modules\UserManagement\Models\User` (The core User model, accessible throughout the application).
 29:         *   Potentially `UserServiceInterface` for complex profile operations (if needed beyond simple CRUD).
 30:     *   *Listens To Events:* Potentially `SubscriptionStatusChanged` (from `SubscriptionBilling`) to update cached user properties if necessary.
 31: 
 32: *   **`SubscriptionBilling` Module:**
 33:     *   *Exposes (Crucial Interfaces):*
 34:         *   `SubscriptionServiceInterface`:
 35:             *   `userHasActivePremiumSubscription(User $user): bool` - *Core method for feature gating.*
 36:             *   `getUserPlan(User $user): ?Plan`
 37:             *   `getSubscriptionStatus(User $user): string`
 38:             *   `handleWebhook(string $provider, array $payload): void` (Internal logic invoked by WebhookController).
 39:             *   Methods to retrieve plan details for the frontend API.
 40:         *   `Models\Plan`, `Models\Subscription`.
 41:     *   *Consumes:* `UserManagement` (for `User` model).
 42:     *   *Fires Events:* `SubscriptionStarted`, `SubscriptionRenewed`, `SubscriptionCanceled`, `SubscriptionExpired`, `PaymentFailed`, `TrialWillEndSoon`.
 43: 
 44: *   **`ContentManagement` Module:**
 45:     *   *Exposes:*
 46:         *   `ContentServiceInterface` (or specific interfaces like `EpisodeServiceInterface`, `ProtocolServiceInterface`):
 47:             *   `getFreeTierProtocols(): Collection`
 48:             *   `getAllProtocols(): Collection`
 49:             *   `getProtocolDetails(int $protocolId): ?Protocol`
 50:             *   `getEpisodeSummaries(int $episodeId): Collection`
 51:             *   `getEpisodeDetails(int $episodeId): ?Episode`
 52:         *   `Models\Episode`, `Models\Protocol`, `Models\Summary`.
 53:     *   *Consumes:* May indirectly use `SubscriptionBilling` (via middleware/policies applied to its controllers) to restrict access to certain data retrieval methods/endpoints.
 54: 
 55: *   **`ProtocolEngine` Module:**
 56:     *   *Exposes:*
 57:         *   `ReminderServiceInterface`:
 58:             *   `setReminder(User $user, int $protocolId, array $settings): UserReminder` (Requires premium check internally).
 59:             *   `getUserReminders(User $user): Collection`
 60:             *   `deleteReminder(User $user, int $reminderId): bool`
 61:         *   `TrackingServiceInterface`:
 62:             *   `logAdherence(User $user, int $protocolId, Carbon $date): ProtocolTrack` (Requires premium check internally).
 63:             *   `getUserTrackingData(User $user, DateRange $range): array`
 64:             *   `calculateStreaks(User $user, int $protocolId): int`
 65:     *   *Consumes:*
 66:         *   `SubscriptionServiceInterface` (to perform internal premium checks before executing actions).
 67:         *   `UserManagement` (for `User` model).
 68:         *   `ContentManagement` (for `Protocol` model details).
 69:     *   *Listens To Events:* Potentially `SubscriptionExpired` (to disable active reminders if needed).
 70: 
 71: *   **`NotesService` Module:**
 72:     *   *Exposes:*
 73:         *   `NoteServiceInterface`:
 74:             *   `createNote(User $user, int $episodeId, string $content, bool $isPublic = false): Note` (Checks limits/public permission).
 75:             *   `updateNote(User $user, int $noteId, array $data): Note`
 76:             *   `deleteNote(User $user, int $noteId): bool`
 77:             *   `getUserNotes(User $user, ?int $episodeId = null): Collection`
 78:             *   `getPublicNotesForEpisode(int $episodeId): Collection`
 79:         *   `Models\Note`.
 80:     *   *Consumes:*
 81:         *   `SubscriptionServiceInterface` (within its policies/services to check free tier limits or premium permission for public notes/advanced features).
 82:         *   `UserManagement` (for `User`).
 83:         *   `ContentManagement` (for `Episode`).
 84: 
 85: *   **`CommunityFeatures` Module:**
 86:     *   *Consumes:*
 87:         *   `NoteServiceInterface` (to fetch public notes).
 88:         *   `SubscriptionServiceInterface` (via middleware/policies to control access to community sections if they are premium).
 89:         *   `UserManagement` (for user details).
 90: 
 91: **4. Key Interaction Flow Examples (Sequence Diagrams - Conceptual)**
 92: 
 93: *   **Flow 1: User Accesses Premium Protocol Details (API Request)**
 94:     1.  `React Native App` -> `API Request (GET /api/protocols/{id})`
 95:     2.  `Laravel Router` -> `CheckPremiumAccess Middleware`
 96:     3.  `CheckPremiumAccess Middleware` -> `Auth` (Get Authenticated User)
 97:     4.  `CheckPremiumAccess Middleware` -> `SubscriptionServiceInterface::userHasActivePremiumSubscription(User)`
 98:     5.  `SubscriptionService` -> `Database/Cache` (Check `subscriptions` table for User) -> Returns `true`
 99:     6.  `CheckPremiumAccess Middleware` -> `Allows Request`
100:     7.  `Laravel Router` -> `ProtocolController::show(protocolId)`
101:     8.  `ProtocolController` -> `ProtocolServiceInterface::getProtocolDetails(protocolId)`
102:     9.  `ProtocolService` -> `Database` (Fetch Protocol data)
103:     10. `ProtocolController` -> `Format Response` (e.g., using API Resource)
104:     11. `Laravel` -> `API Response (200 OK with Protocol Data)` -> `React Native App`
105: 
106: *   **Flow 2: User Sets a Custom Reminder (API Request - Premium Feature)**
107:     1.  `React Native App` -> `API Request (POST /api/reminders)` with protocol ID, time settings.
108:     2.  `Laravel Router` -> `CheckPremiumAccess Middleware`
109:     3.  `CheckPremiumAccess Middleware` -> ... (verifies premium as in Flow 1) -> `Allows Request`
110:     4.  `Laravel Router` -> `ReminderController::store(Request)`
111:     5.  `ReminderController` -> `SetReminderRequest` (Validation)
112:     6.  `ReminderController` -> `ReminderServiceInterface::setReminder(User, protocolId, settings)`
113:     7.  *(Defense-in-depth): `ReminderService` -> `SubscriptionServiceInterface::userHasActivePremiumSubscription(User)` -> Returns `true`*
114:     8.  `ReminderService` -> `Database` (Save `UserReminder` record)
115:     9.  `ReminderService` -> `Queue::dispatch(new ScheduleReminderJob(reminderId))` (Optional: If scheduling is complex)
116:     10. `ReminderController` -> `Format Response (201 Created)`
117:     11. `Laravel` -> `API Response` -> `React Native App`
118: 
119: *   **Flow 3: Payment Provider Webhook (Subscription Renewed)**
120:     1.  `Stripe/Paddle/App Store` -> `POST /api/webhooks/{provider}`
121:     2.  `Laravel Router` -> `WebhookController::handle(provider, Request)`
122:     3.  `WebhookController` -> `VerifyWebhookSignature Middleware/Logic`
123:     4.  `WebhookController` -> `SubscriptionServiceInterface::handleWebhook(provider, payload)`
124:     5.  `SubscriptionService` -> `Parse Payload` (Identify event type: e.g., `invoice.payment_succeeded`, `subscription.updated`)
125:     6.  `SubscriptionService` -> `Database` (Find corresponding `User` and `Subscription` record)
126:     7.  `SubscriptionService` -> `Database` (Update `Subscription` status, `ends_at` date)
127:     8.  `SubscriptionService` -> `Event::dispatch(new SubscriptionRenewed(Subscription))`
128:     9.  `SubscriptionRenewed Listener 1` (e.g., `ClearUserEntitlementCache`) -> `Cache::forget(...)`
129:     10. `SubscriptionRenewed Listener 2` (e.g., `SendRenewalConfirmationEmail`) -> `Queue::dispatch(...)` (Optional)
130:     11. `WebhookController` -> `Return Success Response (200 OK)` -> `Payment Provider`
131: 
132: **5. Frontend Interaction Summary**
133: 
134: The React Native frontend interacts with the backend *exclusively* through the defined RESTful API. It is unaware of the internal module structure, service interfaces, or events. The backend API is responsible for:
135: *   Authenticating the user.
136: *   Performing all necessary authorization and feature gating based on subscription status.
137: *   Returning data appropriate to the user's access level (e.g., filtering content, including flags like `is_premium_user: true` or `can_set_reminders: true`).
138: *   Accepting requests and triggering the relevant backend logic.
139: 
140: **6. Conclusion**
141: 
142: Defining clear interfaces (primarily through PHP Interfaces for Services) and interaction patterns (DI, Events, Middleware, Policies) allows for a decoupled yet cohesive Modular Monolith. This structure facilitates understanding responsibilities, enhances testability (by mocking dependencies), and enables more organized development and maintenance of the Huberman App backend. The key cross-cutting concern of subscription checking is handled systematically via middleware and service calls, ensuring consistent feature gating.
````

## File: app_documentation/content_strategy_management.md
````markdown
 1: **Huberman App: Initial Content Strategy & Management Plan**
 2: 
 3: **1. Introduction**
 4: 
 5: This document outlines the strategy for sourcing, preparing, and ingesting the initial content required for the Huberman App backend, particularly for the Minimum Viable Product (MVP). This includes foundational protocols, summaries, and other necessary data points defined in `app_description.md` and `user_stories_mvp.md`. The goal is to establish a clear process for populating the database using Laravel Seeders.
 6: 
 7: **2. Initial Content Scope (MVP Focus)**
 8: 
 9: Based on the MVP definition, the initial content required includes:
10: 
11: *   **Subscription Plans:** Definition of the "Free" tier and at least one "Premium" tier (e.g., Monthly/Annual) with their identifiers (e.g., `Premium_Monthly`). Provider-specific IDs (Stripe, Apple, Google) will be needed later but placeholders can be used initially in seeders.
12: *   **Foundational Protocols:** A selected subset of core protocols discussed frequently in the Huberman Lab podcast (e.g., Morning Sunlight Viewing, Cold Exposure, Foundational Fitness Protocols). For each:
13:     *   Unique Name
14:     *   Category (e.g., Sleep, Focus, Fitness)
15:     *   Brief Description (Accessible to Free users)
16:     *   *(Optional MVP)* Placeholder/basic Implementation Guide (Premium access)
17: *   **Summaries for Foundational Protocols:** Concise summaries linked to the foundational protocols above.
18: *   **Placeholder Episodes:** A few basic episode entries might be needed to link summaries and notes to, even if full episode data isn't part of the MVP content focus.
19: 
20: **3. Content Source & Curation**
21: 
22: *   **Source Material:** The primary source for protocol and summary content will be the public Huberman Lab podcast episodes and potentially official associated materials (e.g., summaries on the Huberman Lab website, newsletters).
23: *   **Curation Process:**
24:     *   **Responsibility:** A designated **"Content Curator"** role is required. This role is responsible for listening to/reviewing source material, extracting key information, writing descriptions and summaries, and ensuring scientific accuracy aligns with the source. *(This role needs to be assigned - could be a project manager, a subject matter expert, or the client)*.
25:     *   **Extraction:** The Curator will identify the foundational protocols for the MVP, extract their names, core principles (for description), and key takeaways (for summaries).
26:     *   **Writing:** The Curator will write the actual `description` and `summary` text, adhering to a consistent tone and style suitable for the app. Accuracy and clarity are paramount.
27: 
28: **4. Content Preparation & Formatting**
29: 
30: *   **Format:** Content curated should be prepared in **Markdown (`.md`)** format. This provides basic text formatting (headings, lists, bold/italic) while remaining easy for developers to parse and integrate into seeders.
31: *   **Structure:** Separate Markdown files should be created for each protocol and potentially each summary, or grouped logically (e.g., one file per protocol containing its description and summary). A consistent structure within the files is recommended.
32:     *   *Example `morning_sunlight.md` structure:*
33:         ```markdown
34:         # Protocol: Morning Sunlight Viewing
35: 
36:         **Category:** Sleep, Circadian Rhythm
37: 
38:         **Description:**
39:         Brief explanation of the importance of viewing sunlight shortly after waking...
40: 
41:         **Summary:**
42:         Key takeaway points about the protocol...
43: 
44:         **(Premium) Implementation Guide:**
45:         Step-by-step guide (can be basic/placeholder for MVP)...
46:         ```
47: *   **Review:** Before handing off to development, the curated and formatted Markdown content should be reviewed for accuracy, clarity, consistency, and typos (potentially by another team member or the client).
48: 
49: **5. Ingestion Format (for Seeders)**
50: 
51: *   **Method:** The prepared content will be directly embedded into PHP arrays within dedicated Laravel Seeder classes (e.g., `FoundationalProtocolsSeeder.php`, `SummariesSeeder.php`).
52: *   **Rationale:** For the initial, relatively small MVP dataset, embedding directly in PHP arrays is the simplest method. It avoids the need for parsing external files (like JSON or CSV) during the seeding process. If the initial dataset becomes very large, transitioning to reading from JSON files stored alongside the seeders can be considered.
53: *   **Data Structure in Seeders:** The seeders will translate the Markdown content into the structure required by the Eloquent models (`Protocol`, `Summary`, `Episode`). Markdown text can be stored directly in the appropriate database fields (`description`, `content`, `implementation_guide`).
54: 
55: **6. Ingestion Mechanism (Laravel Seeders)**
56: 
57: *   **Implementation:** Backend developers will create the necessary Seeder classes within the `database/seeders/` directory.
58: *   **Specific Seeders:**
59:     *   `PlanSeeder.php`: Creates the 'Free' and 'Premium' plan records. Should use `updateOrCreate` to avoid duplicates on re-seeding.
60:     *   `EpisodeSeeder.php`: Creates placeholder Episode records if needed for relationships.
61:     *   `FoundationalProtocolsSeeder.php`: Creates the initial `Protocol` records from the prepared Markdown content.
62:     *   `SummariesSeeder.php`: Creates the initial `Summary` records, linking them to the appropriate `Protocol` or `Episode` IDs created in previous seeders.
63:     *   `EpisodeProtocolSeeder.php`: Links Episodes and Protocols in the pivot table if necessary for MVP structure.
64: *   **Execution:** Seeders will be executed using `php artisan db:seed`. They will be called sequentially from the main `DatabaseSeeder.php` file to ensure relational integrity (e.g., create protocols before summaries that link to them).
65: *   **Environment:** Seeders should be designed to run safely in development environments. Running seeders in staging/production needs careful consideration (usually only done for initial setup or specific reference data like Plans).
66: 
67: **7. Responsibilities**
68: 
69: *   **Content Curator:** Identify source material, extract information, write/format descriptions & summaries in Markdown, review for accuracy.
70: *   **Backend Developer:** Create/update Seeder classes, integrate Markdown content into PHP arrays within seeders, ensure seeders run correctly and populate the database as expected, handle relationships.
71: *   **QA / PM / Client:** Review the content *as it appears in the running application* (after seeding) to ensure it displays correctly and matches requirements.
72: 
73: **8. Future Content Management**
74: 
75: *   **Limitation of Seeders:** Seeders are primarily for initial data setup and developer environments. They are **not** a suitable mechanism for ongoing content updates by non-developers in a production environment.
76: *   **Post-MVP:** A separate strategy and implementation plan will be required for ongoing content management. This will likely involve developing an Admin Panel or integrating a Headless CMS to allow the Content Curator or other authorized users to add, edit, and manage protocols, episodes, and summaries without requiring code changes and deployments.
77: 
78: **9. Conclusion**
79: 
80: This plan outlines a clear process for handling the initial content load for the Huberman App MVP. By defining the source, curation process, formatting (Markdown), and ingestion mechanism (Laravel Seeders directly using PHP arrays), we can ensure the necessary foundational content is reliably populated for development, testing, and the initial launch. The need for a more robust, long-term content management solution post-MVP is acknowledged.
````

## File: app_documentation/database_migrations_plan.md
````markdown
  1: **Huberman App: Database Migrations Plan**
  2: 
  3: **1. Introduction**
  4: 
  5: This document outlines the plan for translating the conceptual SQL schema defined in `database_plan.md` into executable Laravel migration files. These migrations will provide a version-controlled, repeatable, and database-agnostic way (within Laravel's supported databases) to define and evolve the application's database structure.
  6: 
  7: **2. Process Overview**
  8: 
  9: 1.  **Review SQL Schema:** Thoroughly review the `database_plan.md` file to understand table structures, data types, constraints (NOT NULL, UNIQUE), foreign key relationships, `ON DELETE` behavior, and indexes.
 10: 2.  **Map SQL to Laravel Schema Builder:** Translate each `CREATE TABLE` and `CREATE INDEX` statement into the corresponding Laravel `Schema` facade methods (`Schema::create`, `$table->id()`, `$table->string()`, `$table->foreignId()`, `$table->constrained()`, `$table->unique()`, `$table->index()`, `$table->timestamps()`, `$table->softDeletes()`, etc.).
 11: 3.  **Determine Migration Order:** Create migrations in an order that respects foreign key constraints. Tables must exist before they can be referenced by a foreign key.
 12:     *   Order: `users`, `plans`, `episodes`, `protocols` -> `subscriptions`, `episode_protocol`, `summaries`, `notes` -> `user_protocol_tracking` (if implemented). Standard Laravel tables (`password_resets`, `jobs`, `failed_jobs`) can usually be created anytime or might already exist.
 13: 4.  **Generate Migration Files:** Use the `php artisan make:migration create_table_name_table` command for each table.
 14: 5.  **Implement `up()` Method:** Populate the `up()` method in each migration file with the `Schema::create(...)` logic derived in step 2.
 15: 6.  **Implement `down()` Method:** Populate the `down()` method with the corresponding `Schema::dropIfExists('table_name')` to ensure migrations can be rolled back cleanly.
 16: 7.  **Refine Constraints and Indexes:** Double-check:
 17:     *   **Data Types:** Use appropriate types (`string`, `text`, `integer`, `bigInteger`, `boolean`, `date`, `timestamp`, `jsonb` for Postgres).
 18:     *   **Nullability:** Apply `->nullable()` where needed.
 19:     *   **Uniqueness:** Use `->unique()`.
 20:     *   **Defaults:** Use `->default(...)`.
 21:     *   **Foreign Keys:** Use `->foreignId('column')->constrained('related_table')->onDelete('action')`. Choose `cascade`, `restrict`, `set null`, or `no action` carefully based on relationships (e.g., `cascade` for user-owned data like notes/subscriptions, `restrict` for plans linked to active subscriptions).
 22:     *   **Indexes:** Add `->index()` for frequently queried columns (FKs often indexed automatically by `constrained()`, status fields, categories, dates). Use array syntax for composite indexes (`->index(['col1', 'col2'])`).
 23:     *   **Timestamps/Soft Deletes:** Use `$table->timestamps()` and `$table->softDeletes()` where appropriate.
 24: 8.  **Testing:** Run `php artisan migrate` on a local development database to verify syntax and execution. Test rollbacks using `php artisan migrate:rollback`.
 25: 9.  **Version Control:** Commit the generated migration files to the Git repository.
 26: 
 27: **3. Migration File Structure (Conceptual)**
 28: 
 29: Below is the conceptual structure for each required migration file. Specific commands to generate them are included.
 30: 
 31: **(Note:** Assumes a fresh Laravel project structure. Some standard migrations like `users`, `password_resets`, `failed_jobs` might pre-exist and need modification instead of creation.)
 32: 
 33: ---
 34: 
 35: **1. Create Users Table**
 36: 
 37: *   **Command:** `php artisan make:migration create_users_table`
 38: *   **File:** `database/migrations/YYYY_MM_DD_HHMMSS_create_users_table.php`
 39: 
 40: ```php
 41: <?php
 42: 
 43: use Illuminate\Database\Migrations\Migration;
 44: use Illuminate\Database\Schema\Blueprint;
 45: use Illuminate\Support\Facades\Schema;
 46: 
 47: return new class extends Migration
 48: {
 49:     public function up(): void
 50:     {
 51:         Schema::create('users', function (Blueprint $table) {
 52:             $table->id(); // Bigint, unsigned, auto-increment, primary key
 53:             $table->string('name');
 54:             $table->string('email')->unique();
 55:             $table->timestamp('email_verified_at')->nullable();
 56:             $table->string('password');
 57:             $table->string('profile_picture_url', 2048)->nullable();
 58:             $table->rememberToken();
 59:             $table->timestamps(); // created_at, updated_at (nullable timestamps)
 60:             $table->softDeletes(); // deleted_at (nullable timestamp)
 61:         });
 62:     }
 63: 
 64:     public function down(): void
 65:     {
 66:         Schema::dropIfExists('users');
 67:     }
 68: };
 69: ```
 70: 
 71: ---
 72: 
 73: **2. Create Plans Table**
 74: 
 75: *   **Command:** `php artisan make:migration create_plans_table`
 76: *   **File:** `database/migrations/YYYY_MM_DD_HHMMSS_create_plans_table.php`
 77: 
 78: ```php
 79: <?php
 80: 
 81: use Illuminate\Database\Migrations\Migration;
 82: use Illuminate\Database\Schema\Blueprint;
 83: use Illuminate\Support\Facades\Schema;
 84: 
 85: return new class extends Migration
 86: {
 87:     public function up(): void
 88:     {
 89:         Schema::create('plans', function (Blueprint $table) {
 90:             $table->id(); // Standard auto-incrementing primary key
 91:             $table->string('name')->unique();
 92:             $table->text('description')->nullable();
 93:             $table->string('stripe_product_id')->nullable()->unique(); // Ensure unique if provider used
 94:             $table->string('apple_product_id')->nullable()->unique();
 95:             $table->string('google_product_id')->nullable()->unique();
 96:             $table->jsonb('features')->nullable(); // Use jsonb for PostgreSQL efficiency
 97:             $table->boolean('is_active')->default(true)->index();
 98:             $table->timestamps();
 99:         });
100:     }
101: 
102:     public function down(): void
103:     {
104:         Schema::dropIfExists('plans');
105:     }
106: };
107: ```
108: 
109: ---
110: 
111: **3. Create Subscriptions Table**
112: 
113: *   **Command:** `php artisan make:migration create_subscriptions_table`
114: *   **File:** `database/migrations/YYYY_MM_DD_HHMMSS_create_subscriptions_table.php`
115: 
116: ```php
117: <?php
118: 
119: use Illuminate\Database\Migrations\Migration;
120: use Illuminate\Database\Schema\Blueprint;
121: use Illuminate\Support\Facades\Schema;
122: 
123: return new class extends Migration
124: {
125:     public function up(): void
126:     {
127:         Schema::create('subscriptions', function (Blueprint $table) {
128:             $table->id(); // Bigint primary key
129:             $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // FK to users
130:             $table->foreignId('plan_id')->constrained('plans')->onDelete('restrict'); // FK to plans
131:             $table->string('status', 50)->index(); // e.g., active, canceled
132:             $table->string('provider', 50); // e.g., stripe, apple, google
133:             $table->string('provider_id'); // Subscription ID from provider
134:             $table->string('provider_plan_id')->nullable(); // Plan ID from provider
135:             $table->timestamp('trial_ends_at')->nullable();
136:             $table->timestamp('ends_at')->nullable()->index(); // Current period end or cancellation date
137:             $table->timestamps();
138:             $table->softDeletes(); // Keep record even if canceled by user action immediately
139: 
140:             // Composite index for efficient webhook lookups
141:             $table->index(['provider', 'provider_id']);
142:             // Optional: Unique constraint depending on provider ID handling
143:             // $table->unique(['user_id', 'provider', 'provider_id']); // Re-evaluate if needed
144:         });
145:     }
146: 
147:     public function down(): void
148:     {
149:         Schema::dropIfExists('subscriptions');
150:     }
151: };
152: ```
153: 
154: ---
155: 
156: **4. Create Episodes Table**
157: 
158: *   **Command:** `php artisan make:migration create_episodes_table`
159: *   **File:** `database/migrations/YYYY_MM_DD_HHMMSS_create_episodes_table.php`
160: 
161: ```php
162: <?php
163: 
164: use Illuminate\Database\Migrations\Migration;
165: use Illuminate\Database\Schema\Blueprint;
166: use Illuminate\Support\Facades\Schema;
167: 
168: return new class extends Migration
169: {
170:     public function up(): void
171:     {
172:         Schema::create('episodes', function (Blueprint $table) {
173:             $table->id();
174:             $table->string('title', 512);
175:             $table->string('podcast_source')->default('Huberman Lab');
176:             $table->integer('episode_number')->nullable();
177:             $table->date('published_at')->nullable()->index();
178:             $table->text('description')->nullable();
179:             $table->string('audio_url', 2048)->nullable();
180:             $table->string('source_url', 2048)->nullable();
181:             $table->integer('duration_seconds')->nullable();
182:             $table->timestamps();
183:         });
184:     }
185: 
186:     public function down(): void
187:     {
188:         Schema::dropIfExists('episodes');
189:     }
190: };
191: ```
192: 
193: ---
194: 
195: **5. Create Protocols Table**
196: 
197: *   **Command:** `php artisan make:migration create_protocols_table`
198: *   **File:** `database/migrations/YYYY_MM_DD_HHMMSS_create_protocols_table.php`
199: 
200: ```php
201: <?php
202: 
203: use Illuminate\Database\Migrations\Migration;
204: use Illuminate\Database\Schema\Blueprint;
205: use Illuminate\Support\Facades\Schema;
206: 
207: return new class extends Migration
208: {
209:     public function up(): void
210:     {
211:         Schema::create('protocols', function (Blueprint $table) {
212:             $table->id();
213:             $table->string('name')->unique();
214:             $table->text('description');
215:             $table->string('category', 100)->nullable()->index();
216:             $table->text('implementation_guide')->nullable();
217:             $table->jsonb('research_links')->nullable(); // Use jsonb for PostgreSQL
218:             $table->timestamps();
219:         });
220:     }
221: 
222:     public function down(): void
223:     {
224:         Schema::dropIfExists('protocols');
225:     }
226: };
227: ```
228: 
229: ---
230: 
231: **6. Create Episode-Protocol Pivot Table**
232: 
233: *   **Command:** `php artisan make:migration create_episode_protocol_table`
234: *   **File:** `database/migrations/YYYY_MM_DD_HHMMSS_create_episode_protocol_table.php`
235: 
236: ```php
237: <?php
238: 
239: use Illuminate\Database\Migrations\Migration;
240: use Illuminate\Database\Schema\Blueprint;
241: use Illuminate\Support\Facades\Schema;
242: 
243: return new class extends Migration
244: {
245:     public function up(): void
246:     {
247:         Schema::create('episode_protocol', function (Blueprint $table) {
248:             $table->foreignId('episode_id')->constrained('episodes')->onDelete('cascade');
249:             $table->foreignId('protocol_id')->constrained('protocols')->onDelete('cascade');
250: 
251:             // Define composite primary key
252:             $table->primary(['episode_id', 'protocol_id']);
253: 
254:             // No timestamps by default for basic pivot
255:         });
256:     }
257: 
258:     public function down(): void
259:     {
260:         Schema::dropIfExists('episode_protocol');
261:     }
262: };
263: ```
264: 
265: ---
266: 
267: **7. Create Summaries Table**
268: 
269: *   **Command:** `php artisan make:migration create_summaries_table`
270: *   **File:** `database/migrations/YYYY_MM_DD_HHMMSS_create_summaries_table.php`
271: 
272: ```php
273: <?php
274: 
275: use Illuminate\Database\Migrations\Migration;
276: use Illuminate\Database\Schema\Blueprint;
277: use Illuminate\Support\Facades\Schema;
278: 
279: return new class extends Migration
280: {
281:     public function up(): void
282:     {
283:         Schema::create('summaries', function (Blueprint $table) {
284:             $table->id();
285:             // Foreign key automatically indexed by constrained()
286:             $table->foreignId('episode_id')->constrained('episodes')->onDelete('cascade');
287:             // Optional: Protocol ID if summary is protocol-specific within episode
288:             // $table->foreignId('protocol_id')->nullable()->constrained('protocols')->onDelete('set null');
289:             $table->text('content');
290:             $table->string('type', 50)->default('summary')->index(); // Index type for filtering
291:             $table->timestamps();
292:         });
293:     }
294: 
295:     public function down(): void
296:     {
297:         Schema::dropIfExists('summaries');
298:     }
299: };
300: ```
301: 
302: ---
303: 
304: **8. Create Notes Table**
305: 
306: *   **Command:** `php artisan make:migration create_notes_table`
307: *   **File:** `database/migrations/YYYY_MM_DD_HHMMSS_create_notes_table.php`
308: 
309: ```php
310: <?php
311: 
312: use Illuminate\Database\Migrations\Migration;
313: use Illuminate\Database\Schema\Blueprint;
314: use Illuminate\Support\Facades\Schema;
315: 
316: return new class extends Migration
317: {
318:     public function up(): void
319:     {
320:         Schema::create('notes', function (Blueprint $table) {
321:             $table->id();
322:             $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
323:             $table->foreignId('episode_id')->constrained('episodes')->onDelete('cascade');
324:             $table->text('content');
325:             $table->boolean('is_public')->default(false);
326:             $table->timestamps();
327: 
328:             // Composite index for fetching user's notes for an episode
329:             $table->index(['user_id', 'episode_id']);
330:             // Index for finding public notes for an episode (community feature)
331:             $table->index(['episode_id', 'is_public']); // Basic index; partial index requires raw SQL if essential
332:         });
333:     }
334: 
335:     public function down(): void
336:     {
337:         Schema::dropIfExists('notes');
338:     }
339: };
340: ```
341: 
342: ---
343: 
344: **9. (Optional) Create User Protocol Tracking Table**
345: 
346: *   **Command:** `php artisan make:migration create_user_protocol_tracking_table`
347: *   **File:** `database/migrations/YYYY_MM_DD_HHMMSS_create_user_protocol_tracking_table.php`
348: 
349: ```php
350: <?php
351: 
352: use Illuminate\Database\Migrations\Migration;
353: use Illuminate\Database\Schema\Blueprint;
354: use Illuminate\Support\Facades\Schema;
355: use Illuminate\Support\Facades\DB; // Needed for default date
356: 
357: return new class extends Migration
358: {
359:     public function up(): void
360:     {
361:         Schema::create('user_protocol_tracking', function (Blueprint $table) {
362:             $table->id();
363:             $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
364:             $table->foreignId('protocol_id')->constrained('protocols')->onDelete('cascade');
365:             // Use default date function appropriate for the database
366:             $table->date('tracked_at')->default(DB::raw('CURRENT_DATE'));
367:             $table->text('notes')->nullable();
368:             $table->jsonb('metadata')->nullable(); // Use jsonb for PostgreSQL
369:             $table->timestamps(); // Use standard created_at/updated_at
370: 
371:             // Prevent duplicate tracking entries for the same user, protocol, and day
372:             $table->unique(['user_id', 'protocol_id', 'tracked_at']);
373:             // Note: The unique constraint implicitly creates an index covering (user_id, protocol_id, tracked_at)
374:             // A separate index on (user_id, protocol_id) is usually redundant.
375:         });
376:     }
377: 
378:     public function down(): void
379:     {
380:         Schema::dropIfExists('user_protocol_tracking');
381:     }
382: };
383: ```
384: 
385: ---
386: 
387: **10. Standard Laravel Tables (If needed)**
388: 
389: *   **Password Resets:** `php artisan make:migration create_password_resets_table` (Check if exists first)
390: *   **Jobs:** `php artisan queue:table` then `php artisan migrate`
391: *   **Failed Jobs:** `php artisan make:migration create_failed_jobs_table` (Check if exists first)
392: 
393: ---
394: 
395: **4. Execution**
396: 
397: After creating and reviewing these files:
398: 
399: 1.  Ensure your `.env` file is configured with the correct database connection details.
400: 2.  Run `php artisan migrate` from your project root in the terminal.
401: 3.  Laravel will execute the `up()` method of each pending migration in chronological order.
402: 
403: **5. Outcome**
404: 
405: The result will be a database schema matching the application's requirements, managed entirely through version-controlled Laravel migration files. This allows for consistent setup across development, staging, and production environments, and provides a clear history of schema changes.
````

## File: app_documentation/database_plan.md
````markdown
  1: CREATE TABLE users (
  2:     id BIGSERIAL PRIMARY KEY,                     -- Unique identifier for the user
  3:     name VARCHAR(255) NOT NULL,                  -- User's display name
  4:     email VARCHAR(255) NOT NULL UNIQUE,          -- User's email address (used for login, must be unique)
  5:     password VARCHAR(255) NOT NULL,              -- Hashed password
  6:     email_verified_at TIMESTAMP NULL,            -- Timestamp when the user verified their email address
  7:     profile_picture_url VARCHAR(2048) NULL,      -- URL to the user's profile picture (optional)
  8:     remember_token VARCHAR(100) NULL,            -- For "remember me" functionality (Laravel standard)
  9:     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 10:     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 11:     deleted_at TIMESTAMP NULL                    -- For soft deletes, if enabled
 12: );
 13: 
 14: -- Index for faster email lookups (login)
 15: CREATE INDEX idx_users_email ON users(email);
 16: 
 17: -- Plans Table: Defines the available subscription tiers (including Free).
 18: CREATE TABLE plans (
 19:     id SERIAL PRIMARY KEY,                       -- Unique identifier for the plan
 20:     name VARCHAR(255) NOT NULL UNIQUE,           -- Human-readable name (e.g., 'Free', 'Premium Monthly', 'Premium Annual')
 21:     description TEXT NULL,                       -- Optional description of the plan
 22:     -- Provider-specific identifiers are crucial for mapping
 23:     stripe_product_id VARCHAR(255) NULL UNIQUE,  -- Corresponding Product ID in Stripe (if using Stripe)
 24:     apple_product_id VARCHAR(255) NULL UNIQUE,   -- Corresponding Product ID in App Store Connect (for IAP)
 25:     google_product_id VARCHAR(255) NULL UNIQUE,  -- Corresponding Product ID in Google Play Console (for IAP)
 26:     features JSONB NULL,                         -- Store list of features or entitlements as JSON (flexible)
 27:     is_active BOOLEAN NOT NULL DEFAULT TRUE,     -- Flag to activate/deactivate plans without deleting
 28:     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 29:     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
 30:     -- Note: Price details are often better managed within Stripe/App Stores or a separate related table
 31:     --       if multiple prices exist per plan (e.g., different regions, currencies).
 32:     --       Alternatively, add stripe_price_id etc. here if simple 1 price per plan.
 33: );
 34: 
 35: -- Index for quickly finding active plans
 36: CREATE INDEX idx_plans_is_active ON plans(is_active);
 37: 
 38: -- Subscriptions Table: Tracks user subscriptions to specific plans.
 39: CREATE TABLE subscriptions (
 40:     id BIGSERIAL PRIMARY KEY,                     -- Unique identifier for the subscription record
 41:     user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE, -- Link to the user
 42:     plan_id INT NOT NULL REFERENCES plans(id) ON DELETE RESTRICT, -- Link to the subscribed plan (RESTRICT prevents deleting a plan with active subs)
 43:     status VARCHAR(50) NOT NULL,                 -- Current status (e.g., 'active', 'trialing', 'past_due', 'canceled', 'expired', 'incomplete')
 44:     provider VARCHAR(50) NOT NULL,               -- Source ('stripe', 'apple', 'google')
 45:     provider_id VARCHAR(255) NOT NULL,           -- Subscription ID from the payment provider (e.g., Stripe sub_xxx, Apple original_transaction_id, Google purchaseToken)
 46:     provider_plan_id VARCHAR(255) NULL,          -- Plan/Product ID from the provider (redundant but useful for verification)
 47:     trial_ends_at TIMESTAMP NULL,                -- Timestamp when the trial period ends (if applicable)
 48:     ends_at TIMESTAMP NULL,                      -- Timestamp when the current subscription period ends (renews or expires)
 49:     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 50:     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 51:     deleted_at TIMESTAMP NULL                    -- For soft deletes (e.g., keep history even if user cancels immediately)
 52: 
 53:     -- Ensure a user + provider combo doesn't have duplicate active subscription IDs from the provider
 54:     -- Note: Uniqueness might depend on how provider IDs are handled (e.g., Google Play tokens change)
 55:     -- A composite unique index might be needed based on specific provider behavior.
 56:     -- UNIQUE (user_id, provider, provider_id) -- Consider implications carefully
 57: );
 58: 
 59: -- Indexes for common lookups
 60: CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
 61: CREATE INDEX idx_subscriptions_status ON subscriptions(status);
 62: CREATE INDEX idx_subscriptions_ends_at ON subscriptions(ends_at);
 63: CREATE INDEX idx_subscriptions_provider_id ON subscriptions(provider, provider_id); -- Useful for webhook lookups
 64: 
 65: -- Episodes Table: Stores information about podcast episodes.
 66: CREATE TABLE episodes (
 67:     id BIGSERIAL PRIMARY KEY,
 68:     title VARCHAR(512) NOT NULL,                 -- Title of the episode
 69:     podcast_source VARCHAR(255) NOT NULL DEFAULT 'Huberman Lab', -- Source podcast name
 70:     episode_number INT NULL,                     -- Episode number, if applicable
 71:     published_at DATE NULL,                      -- Original air date
 72:     description TEXT NULL,                       -- Show notes or description
 73:     audio_url VARCHAR(2048) NULL,                -- Link to the audio file (optional)
 74:     source_url VARCHAR(2048) NULL,               -- Link to the original episode page/source
 75:     duration_seconds INT NULL,                   -- Duration in seconds (optional)
 76:     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 77:     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
 78: );
 79: 
 80: -- Index for sorting/filtering by publication date
 81: CREATE INDEX idx_episodes_published_at ON episodes(published_at);
 82: 
 83: -- Protocols Table: Defines the health/performance protocols discussed.
 84: CREATE TABLE protocols (
 85:     id BIGSERIAL PRIMARY KEY,
 86:     name VARCHAR(255) NOT NULL UNIQUE,           -- Name of the protocol (e.g., 'Morning Sunlight Viewing')
 87:     description TEXT NOT NULL,                   -- Detailed explanation of the protocol
 88:     category VARCHAR(100) NULL,                  -- Category (e.g., 'Sleep', 'Focus', 'Nutrition', 'Fitness')
 89:     implementation_guide TEXT NULL,              -- Step-by-step guide or tips for implementation
 90:     research_links JSONB NULL,                   -- Store relevant research paper links as JSON array/objects
 91:     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 92:     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
 93: );
 94: 
 95: -- Index for filtering by category
 96: CREATE INDEX idx_protocols_category ON protocols(category);
 97: 
 98: -- Episode_Protocol Pivot Table: Many-to-many relationship between episodes and protocols.
 99: CREATE TABLE episode_protocol (
100:     episode_id BIGINT NOT NULL REFERENCES episodes(id) ON DELETE CASCADE,
101:     protocol_id BIGINT NOT NULL REFERENCES protocols(id) ON DELETE CASCADE,
102:     -- Optional: Add fields like relevance_score, timestamps_mentioned (JSONB) if needed
103:     PRIMARY KEY (episode_id, protocol_id) -- Composite primary key ensures uniqueness and creates index
104: );
105: 
106: -- Summaries Table: Stores summaries, key takeaways, or soundbites related to episodes.
107: CREATE TABLE summaries (
108:     id BIGSERIAL PRIMARY KEY,
109:     episode_id BIGINT NOT NULL REFERENCES episodes(id) ON DELETE CASCADE, -- Link to the episode
110:     -- Optional: protocol_id BIGINT NULL REFERENCES protocols(id) ON DELETE SET NULL, -- If a summary is specific to a protocol within an episode
111:     content TEXT NOT NULL,                       -- The summary text itself
112:     type VARCHAR(50) NOT NULL DEFAULT 'summary', -- Type ('summary', 'key_takeaway', 'soundbite', 'quote')
113:     -- Optional: Add start/end timestamps if linking to specific audio points
114:     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
115:     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
116: );
117: 
118: -- Index for quickly finding summaries for an episode
119: CREATE INDEX idx_summaries_episode_id ON summaries(episode_id);
120: 
121: -- Notes Table: Stores user-generated notes, linked to episodes.
122: CREATE TABLE notes (
123:     id BIGSERIAL PRIMARY KEY,
124:     user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE, -- Link to the note author
125:     episode_id BIGINT NOT NULL REFERENCES episodes(id) ON DELETE CASCADE, -- Link to the related episode
126:     content TEXT NOT NULL,                       -- The content of the note
127:     is_public BOOLEAN NOT NULL DEFAULT FALSE,    -- Flag for public vs. private notes
128:     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
129:     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
130: );
131: 
132: -- Indexes for common note queries
133: CREATE INDEX idx_notes_user_id ON notes(user_id);
134: CREATE INDEX idx_notes_episode_id ON notes(episode_id);
135: -- Composite index might be useful for fetching user's notes for a specific episode
136: CREATE INDEX idx_notes_user_episode ON notes(user_id, episode_id);
137: -- Index for finding public notes for an episode (community feature)
138: CREATE INDEX idx_notes_public_episode ON notes(episode_id, is_public) WHERE is_public = TRUE;
139: 
140: -- (Optional) User Protocol Settings/Tracking Table: If advanced tracking is added.
141: -- CREATE TABLE user_protocol_tracking (
142: --     id BIGSERIAL PRIMARY KEY,
143: --     user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
144: --     protocol_id BIGINT NOT NULL REFERENCES protocols(id) ON DELETE CASCADE,
145: --     tracked_at DATE NOT NULL DEFAULT CURRENT_DATE, -- Date the protocol was marked as done/tracked
146: --     notes TEXT NULL,                              -- Optional notes specific to this tracking instance
147: --     metadata JSONB NULL,                          -- For storing extra data (e.g., duration, intensity)
148: --     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
149: --     UNIQUE (user_id, protocol_id, tracked_at) -- Prevent duplicate tracking per day
150: -- );
151: -- CREATE INDEX idx_user_protocol_tracking_user_protocol ON user_protocol_tracking(user_id, protocol_id);
152: 
153: -- Standard Laravel Tables (Optional but common):
154: -- These might be created automatically by Laravel migrations if used.
155: 
156: -- CREATE TABLE password_resets (
157: --     email VARCHAR(255) PRIMARY KEY,
158: --     token VARCHAR(255) NOT NULL,
159: --     created_at TIMESTAMP NULL
160: -- );
161: 
162: -- CREATE TABLE jobs (
163: --     id BIGSERIAL PRIMARY KEY,
164: --     queue VARCHAR(255) NOT NULL,
165: --     payload TEXT NOT NULL,
166: --     attempts SMALLINT NOT NULL,
167: --     reserved_at INT NULL,
168: --     available_at INT NOT NULL,
169: --     created_at INT NOT NULL
170: -- );
171: -- CREATE INDEX idx_jobs_queue_reserved_at ON jobs(queue, reserved_at);
172: 
173: -- CREATE TABLE failed_jobs (
174: --     id BIGSERIAL PRIMARY KEY,
175: --     connection TEXT NOT NULL,
176: --     queue TEXT NOT NULL,
177: --     payload TEXT NOT NULL,
178: --     exception TEXT NOT NULL,
179: --     failed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
180: -- );
181: 
182: **Key Relationships Summary:**
183: 
184: - **User <-> Subscription:** One User has many Subscription records (potentially over time), each linking to one Plan.
185: - **User <-> Note:** One User has many Notes.
186: - **Episode <-> Note:** One Episode has many Notes.
187: - **Episode <-> Protocol:** Many Episodes can discuss many Protocols (via episode_protocol pivot table).
188: - **Episode <-> Summary:** One Episode has many Summaries.
189: - **Plan <-> Subscription:** One Plan can be associated with many Subscriptions.
````

## File: app_documentation/detailed_plan.md
````markdown
  1: **Huberman App (Optimize Guide): Implementation Preparation Plan**
  2: 
  3: **1. Transition Summary**
  4: 
  5: We have successfully completed the high-level application description and architectural blueprint phases for the Huberman App. The architecture outlines a Modular Monolith (Laravel/PHP backend), a React Native frontend, PostgreSQL database, Redis caching/queuing, and a RESTful API, all designed to support the defined Freemium subscription model. This document details the next crucial phase: transitioning from the architectural vision to actionable technical specifications, project setup, and environment preparation necessary to initiate development efficiently and effectively. The objective is to establish a solid foundation for the implementation lifecycle.
  6: 
  7: **2. Detailed Technical Design & Specifications**
  8: 
  9: This phase focuses on refining the high-level architecture into granular component designs and technical specifications.
 10: 
 11: *   **Component Breakdown (Modular Monolith):**
 12:     *   **Process:** Decompose the Laravel backend into logical, domain-driven modules (Namespaces/Folders). Based on the architecture and features, initial modules will likely include: `Authentication`, `UserManagement`, `SubscriptionBilling` (integrating with chosen payment provider/Cashier), `ContentManagement` (Episodes, Protocols, Summaries), `ProtocolEngine` (Reminder logic, Tracking), `NotesService`, `CommunityFeatures` (if applicable early), and `CoreApi`.
 13:     *   **Outcome:** Clearly defined code boundaries and responsibilities within the Laravel application structure.
 14: *   **Component Interfaces & Interactions:**
 15:     *   **Process:** Define the specific internal contracts (Service Classes, Interfaces, Events) for how these backend modules interact. Document the flow of data and control, especially for cross-cutting concerns like subscription status checks. For frontend-backend interaction, focus on the API.
 16:     *   **Outcome:** Documented internal interaction patterns (e.g., Sequence Diagrams for key flows) and clear responsibilities for each module.
 17: *   **API Design & Documentation:**
 18:     *   **Process:** Formalize the RESTful API contract. Utilize OpenAPI (Swagger) specification to define all endpoints, request/response schemas, authentication methods (Laravel Sanctum/Passport), and authorization requirements. Explicitly tag endpoints requiring 'Premium' subscription status. Key areas include: Auth (login, register, password reset), User Profile, Plans/Subscriptions (fetching offers, potentially linking to provider portals), Content (fetching episodes, protocols, summaries - with filtering for free/premium), Notes (CRUD, public/private flags), Reminders (CRUD for premium), Tracking (logging adherence for premium). Define error handling standards (HTTP status codes, error response structure). Define webhook endpoints for payment providers (Stripe/Paddle, Apple App Store Server Notifications, Google Play Developer API).
 19:     *   **Outcome:** A version-controlled `openapi.yaml` or `swagger.json` file serving as the definitive API contract for both frontend and backend teams.
 20: *   **Database Schema Refinement:**
 21:     *   **Process:** Review the provided `database_plan.md` SQL schema. Convert it into Laravel Migrations. Finalize data types, constraints (NOT NULL, UNIQUE), foreign key relationships (with appropriate ON DELETE behavior - e.g., CASCADE for notes on user delete, RESTRICT for plans on active subscriptions). Define necessary indexes based on anticipated query patterns (e.g., indexing `subscriptions.user_id`, `subscriptions.status`, `subscriptions.ends_at`, `notes.user_id`, `notes.episode_id`, `protocols.category`). Plan for potential future schema evolution using migrations.
 22:     *   **Outcome:** A complete set of executable Laravel migration files checked into version control, representing the definitive database structure.
 23: *   **Complex Workflow/Algorithm Design:**
 24:     *   **Process:** Document the specific logic for complex features identified in the architecture:
 25:         *   **Subscription Lifecycle Management:** Detail the state machine for subscriptions (`trialing`, `active`, `past_due`, `canceled`, `expired`) and how webhook events from Stripe/Paddle/Apple/Google trigger state transitions and update the `subscriptions` table.
 26:         *   **Feature Gating Logic:** Specify the implementation details for Laravel Middleware/Policies that check the user's active subscription status (querying `subscriptions` table, potentially using cached flags from Redis) before granting access to premium API routes or features.
 27:         *   **Customizable Reminders (Premium):** Design the scheduling mechanism (likely using Laravel's Task Scheduling + Queues) to trigger push notifications based on user-defined times/frequencies for specific protocols.
 28:         *   **Tracking & Visualization Logic (Premium):** Define how adherence data is stored and how it will be aggregated for progress visualizations (e.g., streak calculation).
 29:     *   **Outcome:** Sequence diagrams, state diagrams, or pseudo-code documenting the core logic for these critical flows.
 30: *   **Technology Version & Library Finalization:**
 31:     *   **Process:** Lock down specific versions: PHP (e.g., 8.2+), Laravel (e.g., 10.x/11.x), PostgreSQL (e.g., 17), Redis (e.g., 7.x), Node.js (LTS for React Native tooling), React Native (latest stable). Select and document key libraries: `laravel/cashier-stripe` or `laravel/cashier-paddle`, `react-native-iap`, Push Notification library (e.g., `react-native-push-notification` or cloud provider SDKs), state management for RN (e.g., Redux Toolkit, Zustand).
 32:     *   **Outcome:** Updated `composer.json`, `package.json`, and potentially a project README or Architecture Decision Record (ADR) listing finalized versions and libraries.
 33: 
 34: **3. Project Planning & Development Readiness**
 35: 
 36: Translate the technical design into a manageable project plan and prepare the team.
 37: 
 38: *   **Requirements Refinement (User Stories):**
 39:     *   **Process:** Break down the features from `app_description.md` (both Free and Premium tiers) into granular User Stories (e.g., "As a Free User, I want to see summaries for foundational protocols so that I can understand the basics," "As a Premium User, I want to set a custom daily reminder for 'Morning Sunlight Viewing' so that I don't forget," "As a Premium User, I want to mark a protocol as completed for the day so that I can track my adherence"). Use a tool like Jira or Trello. Prioritize stories for an MVP, focusing on core free functionality and the subscription mechanism first, followed by premium features.
 40:     *   **Outcome:** A populated backlog of estimated User Stories in the chosen project management tool.
 41: *   **Detailed Estimation:**
 42:     *   **Process:** Estimate the effort for each User Story based on the detailed technical designs (e.g., using Story Points or time estimates). This should be done collaboratively by the development team.
 43:     *   **Outcome:** Estimated backlog providing a basis for timeline creation.
 44: *   **Granular Project Timeline & Milestones:**
 45:     *   **Process:** Develop a sprint-based or Kanban-based timeline. Define key milestones:
 46:         *   M1: Project Setup Complete (Repo, CI/CD Base, Local Env).
 47:         *   M2: Core Backend Ready (Auth, User Mgmt, DB Migrations, Basic API Shell).
 48:         *   M3: Basic Content Display (Free Tier Protocols/Summaries visible in RN App).
 49:         *   M4: Subscription Flow PoC (IAP Integration, Backend Webhooks, Basic Feature Gate).
 50:         *   M5: Free Tier Feature Complete (Basic Reminders, Notes).
 51:         *   M6: Premium Feature Set 1 (e.g., Full Content Access, Custom Reminders).
 52:         *   M7: Premium Feature Set 2 (e.g., Tracking, Offline Access).
 53:         *   M8: Beta Release / Production Readiness.
 54:     *   **Outcome:** A documented project plan with sprints/phases, milestones, and dependencies visualized.
 55: *   **Resource Allocation:**
 56:     *   **Process:** Assign development team members (Backend Devs, Frontend RN Devs, QA, potentially DevOps support) to specific modules, epics, or sprints based on skills and availability.
 57:     *   **Outcome:** Clear ownership of tasks/modules within the team.
 58: *   **Essential Tooling Setup:**
 59:     *   **Process:** Configure and grant access to necessary tools:
 60:         *   Project Management: Jira/Trello board setup.
 61:         *   Version Control: GitHub/GitLab/Bitbucket repository creation, branch strategy definition (e.g., Gitflow).
 62:         *   Communication: Slack/Teams channel setup.
 63:         *   Documentation: Confluence/Notion space creation for technical docs, ADRs, meeting notes.
 64:     *   **Outcome:** Operational project infrastructure ready for team use.
 65: *   **Development Environment Configuration:**
 66:     *   **Process:** Finalize and distribute the Docker configuration (`docker-compose.yml`) as specified in the architecture. Ensure it includes containers for PHP-FPM, Nginx/Caddy, PostgreSQL, Redis, and Node.js (for frontend tooling). Provide clear instructions for setup and usage. Standardize environment variable management (e.g., `.env` files with templates).
 67:     *   **Outcome:** Developers can quickly and consistently set up identical local development environments.
 68: 
 69: **4. UI/UX Design Integration (If Applicable)**
 70: 
 71: If not already completed, this is a critical parallel activity, especially for the React Native frontend.
 72: 
 73: *   **Process:** Ensure finalized, high-fidelity mockups and prototypes are available and signed off. These must cover:
 74:     *   All key user flows (onboarding, browsing content, setting reminders, taking notes, tracking progress).
 75:     *   Clear visual differentiation between Free and Premium features/content.
 76:     *   User-friendly prompts and flows for upgrading to Premium.
 77:     *   Platform-specific design conventions (iOS/Android).
 78:     *   Creation of a component library/design system for consistency.
 79: *   **Outcome:** Signed-off UI/UX designs and a style guide/component library ready for frontend development.
 80: 
 81: **5. Infrastructure & Environment Setup**
 82: 
 83: Prepare the cloud/hosting environments required beyond local development.
 84: 
 85: *   **Infrastructure Planning:**
 86:     *   **Process:** Based on the Laravel Forge/Vapor choice, plan the specific server sizes/configurations (if using Forge) or review Vapor's serverless scaling model. Estimate initial database (PostgreSQL) and cache (Redis) resource needs (using managed services). Plan for object storage (S3/GCS) for potential offline content or user uploads.
 87:     *   **Outcome:** Documented infrastructure requirements and initial sizing estimates.
 88: *   **Cloud Service Selection:**
 89:     *   **Process:** Confirm choices: Forge/Vapor for hosting, AWS RDS/Managed Postgres provider, AWS ElastiCache/Managed Redis provider, S3/GCS for storage. Set up accounts if necessary.
 90:     *   **Outcome:** Finalized list of cloud services and providers.
 91: *   **Environment Provisioning:**
 92:     *   **Process:** Use Forge/Vapor (or Terraform/Pulumi if more control is desired) to provision the initial Dev, Staging, and Production environments. This includes setting up servers/services, databases, caches, and configuring network access/security groups.
 93:     *   **Outcome:** Functional cloud environments ready for deployment.
 94: *   **Monitoring, Logging, Alerting Setup:**
 95:     *   **Process:** Integrate monitoring tools (e.g., Datadog, Sentry, CloudWatch, Prometheus/Grafana) into the provisioned environments. Configure basic logging aggregation (e.g., Vapor logs, CloudWatch Logs, ELK stack). Set up initial alerts for critical events (e.g., high error rates, server down, high DB connections). Integrate Laravel Telescope for Dev/Staging.
 96:     *   **Outcome:** Foundational observability infrastructure in place.
 97: *   **Backup & Recovery Planning:**
 98:     *   **Process:** Configure automated database backups (e.g., using RDS snapshots or provider tools) with defined retention policies. Document the recovery procedure (e.g., restoring from a snapshot).
 99:     *   **Outcome:** Initial backup strategy implemented and documented.
100: 
101: **6. Security Deep Dive & Planning**
102: 
103: Integrate security rigorously from the start.
104: 
105: *   **Detailed Threat Modeling:**
106:     *   **Process:** Conduct a threat modeling session (e.g., using STRIDE) based on the detailed technical design, data flows, and features (especially authentication, subscription handling, user notes, potential community features). Identify potential threats and vulnerabilities.
107:     *   **Outcome:** A documented threat model identifying key risks and potential attack vectors.
108: *   **Define Specific Technical Security Controls:**
109:     *   **Process:** Based on the threat model and architecture, define concrete security controls:
110:         *   **Authentication:** Specify token expiry, refresh token strategy, password complexity rules, brute-force protection (rate limiting).
111:         *   **Authorization:** Detail the implementation of Laravel Policies/Middleware for checking `subscriptions.status` for premium features. Ensure no business logic relies solely on client-side checks.
112:         *   **Encryption:** Enforce TLS 1.2+ (HTTPS), confirm database encryption at rest, define secure storage for API keys/secrets (e.g., environment variables injected via Forge/Vapor, potentially a secrets manager).
113:         *   **Input Validation:** Define strategy (e.g., Laravel Form Requests) for validating all incoming API request data.
114:         *   **Payment Security:** Reiterate server-side validation of IAP receipts and secure webhook handling (signature verification).
115:         *   **Dependency Scanning:** Plan for tools like `composer audit`, `npm audit`.
116:     *   **Outcome:** A checklist or document detailing specific security controls to be implemented and verified.
117: *   **Security Testing Planning:**
118:     *   **Process:** Plan for integrating security testing into the development lifecycle:
119:         *   **SAST:** Configure static analysis tools (e.g., PHPStan, Psalm, ESLint security plugins) to run locally and/or in CI.
120:         *   **DAST:** Plan for using basic dynamic analysis tools against the Staging environment later in the cycle.
121:         *   **Penetration Testing:** Allocate budget/time for external penetration testing before major production launches.
122:     *   **Outcome:** Security testing activities integrated into the project plan and CI/CD strategy.
123: 
124: **7. CI/CD Pipeline Foundation**
125: 
126: Automate the build, test, and deployment process early.
127: 
128: *   **Process:** Set up the initial CI/CD pipeline (using GitHub Actions, GitLab CI, Bitbucket Pipelines, or Jenkins) connected to the version control repository. Configure initial stages:
129:     *   Trigger on push/merge to `develop` and `main` branches.
130:     *   Checkout code.
131:     *   Install dependencies (`composer install`, `npm install`).
132:     *   Run linters and static analysis (SAST tools).
133:     *   Run automated tests (Unit, Integration - e.g., `php artisan test`, `npm test`).
134:     *   Build frontend assets (`npm run build`).
135:     *   (Initial) Deploy script targeting the Dev/Staging environment using Forge CLI/API or Vapor CLI deployment commands.
136: *   **Outcome:** A basic, functional CI/CD pipeline that automates testing and deployment to lower environments, ready to be expanded as the project progresses.
137: 
138: **8. Initiation of Development**
139: 
140: With the detailed plans and setup complete, development can commence.
141: 
142: *   **Process:** The development team begins implementation based on the prioritized backlog (User Stories), detailed technical designs, API specifications, and established environment/tooling setup.
143: *   **Initial Focus:**
144:     *   Setting up the base Laravel and React Native project structures.
145:     *   Implementing core database migrations (Users, Plans, Subscriptions, initial Content tables).
146:     *   Building the Authentication flow (backend API and frontend screens).
147:     *   Establishing basic API communication between frontend and backend.
148:     *   Setting up the basic subscription scaffolding (e.g., integrating Laravel Cashier, defining Plan models).
149: *   **Outcome:** Development kickoff, focusing on foundational components and demonstrating core connectivity.
````

## File: app_documentation/infrastructure_devops_details.md
````markdown
  1: Okay, let's create the `infrastructure_devops_details.md` file to provide concrete starting points for Docker, CI/CD, Monitoring, Logging, and Backups.
  2: 
  3: --- START OF FILE infrastructure_devops_details.md ---
  4: 
  5: **Huberman App: Infrastructure & DevOps Specifics**
  6: 
  7: **1. Introduction**
  8: 
  9: This document provides more specific details and initial configurations for the infrastructure and DevOps components outlined in the project plan and backend TODO list. It includes a concrete example for `docker-compose.yml`, a basic CI/CD pipeline structure using GitHub Actions, and initial recommendations for monitoring, logging, and backup configurations. These are starting points and should be refined based on specific hosting choices (Forge/Vapor) and evolving project needs.
 10: 
 11: **2. Local Development Environment (`docker-compose.yml`)**
 12: 
 13: This configuration provides the necessary services for local backend development and testing. Place this file in the project root.
 14: 
 15: ```yaml
 16: # docker-compose.yml
 17: version: '3.8'
 18: 
 19: services:
 20:   # PHP Service (Application Server)
 21:   app:
 22:     build:
 23:       context: .
 24:       dockerfile: Dockerfile # Assumes a Dockerfile exists for PHP setup
 25:       args:
 26:         UID: "${UID:-1000}" # Pass host user ID for permissions
 27:         GID: "${GID:-1000}" # Pass host group ID for permissions
 28:     container_name: huberman_app_php
 29:     restart: unless-stopped
 30:     tty: true
 31:     environment:
 32:       SERVICE_NAME: app
 33:       SERVICE_TAGS: dev
 34:       # Pass environment variables from .env file
 35:       PHP_IDE_CONFIG: "serverName=Docker" # Example for Xdebug integration
 36:       XDEBUG_MODE: "${XDEBUG_MODE:-off}" # Control Xdebug mode via .env
 37:       XDEBUG_CONFIG: "client_host=host.docker.internal" # Xdebug config for Docker Desktop
 38:     working_dir: /var/www/html
 39:     volumes:
 40:       - ./:/var/www/html # Mount application code
 41:       # Persist bash history (optional)
 42:       # - ./docker-data/bashhistory:/root/.bash_history_docker
 43:     networks:
 44:       - huberman_app_network
 45:     depends_on:
 46:       - db
 47:       - redis
 48: 
 49:   # Web Server (Nginx)
 50:   webserver:
 51:     image: nginx:alpine
 52:     container_name: huberman_app_nginx
 53:     restart: unless-stopped
 54:     tty: true
 55:     ports:
 56:       - "${APP_PORT:-8000}:80" # Expose app port from .env or default 8000
 57:     volumes:
 58:       - ./:/var/www/html
 59:       - ./docker/nginx/conf.d/:/etc/nginx/conf.d/ # Mount custom Nginx config
 60:     networks:
 61:       - huberman_app_network
 62:     depends_on:
 63:       - app
 64: 
 65:   # Database Server (PostgreSQL)
 66:   db:
 67:     image: postgres:16-alpine
 68:     container_name: huberman_app_db
 69:     restart: unless-stopped
 70:     tty: true
 71:     ports:
 72:       - "${DB_PORT:-5432}:5432" # Expose DB port from .env or default 5432
 73:     environment:
 74:       POSTGRES_DB: "${DB_DATABASE:-huberman_db}"
 75:       POSTGRES_USER: "${DB_USERNAME:-sail}" # Use Sail defaults or .env values
 76:       POSTGRES_PASSWORD: "${DB_PASSWORD:-password}"
 77:       POSTGRES_HOST_AUTH_METHOD: "trust" # For easy local connections, change if needed
 78:     volumes:
 79:       - huberman_db_data:/var/lib/postgresql/data # Persistent DB data
 80:       # Optional: Mount init scripts
 81:       # - ./docker/db/init:/docker-entrypoint-initdb.d
 82:     networks:
 83:       - huberman_app_network
 84:     healthcheck: # Basic healthcheck
 85:       test: ["CMD", "pg_isready", "-U", "${DB_USERNAME:-sail}", "-d", "${DB_DATABASE:-huberman_db}"]
 86:       interval: 10s
 87:       timeout: 5s
 88:       retries: 5
 89: 
 90:   # Cache Server (Redis)
 91:   redis:
 92:     image: redis:7-alpine
 93:     container_name: huberman_app_redis
 94:     restart: unless-stopped
 95:     ports:
 96:       - "${REDIS_PORT:-6379}:6379" # Expose Redis port from .env or default 6379
 97:     volumes:
 98:       - huberman_redis_data:/data # Persistent Redis data
 99:     networks:
100:       - huberman_app_network
101:     healthcheck: # Basic healthcheck
102:       test: ["CMD", "redis-cli", "ping"]
103:       interval: 10s
104:       timeout: 5s
105:       retries: 5
106: 
107: # Define Networks
108: networks:
109:   huberman_app_network:
110:     driver: bridge
111: 
112: # Define Volumes
113: volumes:
114:   huberman_db_data:
115:     driver: local
116:   huberman_redis_data:
117:     driver: local
118: 
119: ```
120: 
121: **Notes on `docker-compose.yml`:**
122: 
123: *   **`Dockerfile`:** This setup assumes a `Dockerfile` in the root for the `app` service to handle PHP setup, installing extensions (like `pdo_pgsql`, `pgsql`, `redis`, `bcmath`, `pcntl`, `gd`), composer installation, and potentially setting user permissions correctly. You'll need to create this file.
124: *   **`.env` Integration:** It relies heavily on your project's `.env` file for configuration (ports, DB credentials, etc.). Ensure your `.env` file is present and correctly configured. Use `.env.example` as a template.
125: *   **UID/GID:** Passing host user/group IDs helps avoid permission issues with mounted volumes, especially file creation by PHP.
126: *   **Nginx Config:** Requires a custom Nginx configuration file (e.g., `docker/nginx/conf.d/app.conf`) to proxy requests to the `app` service (PHP-FPM on port 9000).
127: *   **Xdebug:** Includes basic Xdebug configuration for easier debugging. Control via `XDEBUG_MODE` in `.env`.
128: *   **Healthchecks:** Basic checks added to ensure services are responsive.
129: 
130: **3. CI/CD Pipeline Definition (GitHub Actions Example)**
131: 
132: This provides a basic pipeline structure for running tests and static analysis on pushes/PRs to `main` and `develop`. Place this in `.github/workflows/ci.yml`.
133: 
134: ```yaml
135: # .github/workflows/ci.yml
136: name: Laravel CI
137: 
138: on:
139:   push:
140:     branches: [ main, develop ]
141:   pull_request:
142:     branches: [ main, develop ]
143: 
144: jobs:
145:   build_and_test:
146:     runs-on: ubuntu-latest
147: 
148:     services: # Start dependent services for testing
149:       postgres:
150:         image: postgres:16-alpine
151:         env:
152:           POSTGRES_DB: huberman_test_db
153:           POSTGRES_USER: sail
154:           POSTGRES_PASSWORD: password
155:           POSTGRES_HOST_AUTH_METHOD: trust # Easiest for CI connection
156:         ports:
157:           - 5432:5432
158:         options: >-
159:           --health-cmd pg_isready
160:           --health-interval 10s
161:           --health-timeout 5s
162:           --health-retries 5
163:       redis:
164:         image: redis:7-alpine
165:         ports:
166:           - 6379:6379
167:         options: >-
168:           --health-cmd "redis-cli ping"
169:           --health-interval 10s
170:           --health-timeout 5s
171:           --health-retries 5
172: 
173:     steps:
174:     - name: Checkout code
175:       uses: actions/checkout@v4
176: 
177:     - name: Setup PHP
178:       uses: shivammathur/setup-php@v2
179:       with:
180:         php-version: '8.2' # Match project version
181:         extensions: dom, curl, libxml, mbstring, zip, pcntl, pdo, pgsql, pdo_pgsql, redis, bcmath, gd # Match required extensions
182:         tools: composer:v2
183:         coverage: none # Set to pcov or xdebug if generating coverage reports
184: 
185:     - name: Setup Node.js (Optional, if needed for frontend assets/tools)
186:       uses: actions/setup-node@v4
187:       with:
188:         node-version: '20.x' # Match project version
189:         cache: 'npm'
190: 
191:     - name: Get Composer Cache Directory
192:       id: composer-cache
193:       run: echo "dir=$(composer config cache-files-dir)" >> $GITHUB_OUTPUT
194: 
195:     - name: Cache Composer Dependencies
196:       uses: actions/cache@v4
197:       with:
198:         path: ${{ steps.composer-cache.outputs.dir }}
199:         key: ${{ runner.os }}-composer-${{ hashFiles('**/composer.lock') }}
200:         restore-keys: |
201:           ${{ runner.os }}-composer-
202: 
203:     - name: Install Composer Dependencies
204:       run: composer install --no-progress --prefer-dist --optimize-autoloader
205: 
206:     - name: Prepare Laravel Environment
207:       run: |
208:         cp .env.example .env
209:         sed -i 's/DB_HOST=127.0.0.1/DB_HOST=127.0.0.1/g' .env # Ensure localhost for service access
210:         sed -i 's/DB_PORT=5432/DB_PORT=5432/g' .env
211:         sed -i 's/DB_DATABASE=laravel/DB_DATABASE=huberman_test_db/g' .env
212:         sed -i 's/DB_USERNAME=root/DB_USERNAME=sail/g' .env
213:         sed -i 's/DB_PASSWORD=/DB_PASSWORD=password/g' .env
214:         sed -i 's/REDIS_HOST=127.0.0.1/REDIS_HOST=127.0.0.1/g' .env
215:         sed -i 's/REDIS_PORT=6379/REDIS_PORT=6379/g' .env
216:         php artisan key:generate
217: 
218:     - name: Wait for Services (Postgres)
219:       run: |
220:         echo "Waiting for PostgreSQL to start..."
221:         until pg_isready -h 127.0.0.1 -p 5432 -U sail; do
222:           sleep 1
223:         done
224:         echo "PostgreSQL started!"
225: 
226:     - name: Run Database Migrations
227:       run: php artisan migrate --force # Use --force to run without prompt in CI
228: 
229:     - name: Run Linters (Pint)
230:       run: ./vendor/bin/pint --test
231: 
232:     - name: Run Static Analysis (PHPStan)
233:       run: ./vendor/bin/phpstan analyse --memory-limit=2G
234: 
235:     - name: Run Tests (PHPUnit)
236:       run: php artisan test
237: 
238:     # Optional: NPM Steps if needed for backend assets
239:     # - name: Install NPM Dependencies
240:     #   run: npm ci
241:     # - name: Build Assets
242:     #   run: npm run build
243: ```
244: 
245: **Notes on `ci.yml`:**
246: 
247: *   **Services:** Uses GitHub Actions `services` to run PostgreSQL and Redis alongside the main job container, making them accessible on `127.0.0.1`.
248: *   **Environment:** Copies `.env.example` and modifies it specifically for the CI environment database/redis services.
249: *   **Dependencies:** Caches Composer dependencies for faster runs.
250: *   **Tests:** Runs Pint, PHPStan, and PHPUnit. Add other checks as needed.
251: *   **Deployment:** Deployment steps (Forge, Vapor, etc.) are *not* included here but would typically be added as separate jobs triggered manually or on merges to `main`.
252: 
253: **4. Monitoring, Logging & Backup Specifics (Initial Recommendations)**
254: 
255: These are starting points, adjust based on provider capabilities (Forge/Vapor often provide defaults) and application sensitivity.
256: 
257: *   **Monitoring:**
258:     *   **Key Metrics:**
259:         *   System: CPU (<80%), Memory (<85%), Disk Space (<90% full).
260:         *   Application: 5xx Error Rate (<1%), Average API Response Time (<500ms), Requests Per Minute.
261:         *   Queue: `jobs` table count (< 100 pending for > 5 mins), `failed_jobs` count (> 0).
262:     *   **Tools:** Leverage Forge/Vapor built-in monitoring. Consider Sentry (or Flare for Laravel) for error tracking & basic performance monitoring. For more depth, look at Datadog or New Relic later.
263: 
264: *   **Logging:**
265:     *   **Level:** Production: `WARNING` or `ERROR`. Staging/Dev: `DEBUG`.
266:     *   **Channel (Laravel `config/logging.php`):**
267:         *   Use the `stack` channel.
268:         *   Include `daily` file logging (`path/to/storage/logs/laravel.log`).
269:         *   Integrate a log aggregation service (if using Forge/Vapor check their recommendations, otherwise Papertrail, Logtail, Datadog Logs). Configure a `syslog` or dedicated driver pointing to the service.
270:     *   **Format:** Configure the `stack` channel or aggregation channel to use a `Monolog\Formatter\JsonFormatter` for structured logging.
271:     *   **Key Events to Log (Contextual):** User registration/login failures, password resets, subscription webhook received (start/end/status), subscription state changes, job processing start/end/failure, critical errors caught in exception handler, manual logging for complex workflow steps. **AVOID LOGGING SENSITIVE DATA.**
272: 
273: *   **Alerting (Initial Critical Alerts):**
274:     *   Configure via monitoring tool (Forge/Vapor/Datadog/Sentry):
275:         *   5xx Error Rate > 2% over 5 minutes.
276:         *   Server/Instance Unreachable.
277:         *   CPU or Memory > 90% for 5 minutes.
278:         *   Disk Space > 95% full.
279:         *   Failed Jobs Count increases significantly or > X total.
280:         *   Queue length grows consistently without processing.
281:         *   Sentry/Flare reports a spike in new or existing errors.
282: 
283: *   **Backups (Database - PostgreSQL):**
284:     *   **Mechanism:** **Strongly recommend** using the managed database provider's automated snapshot feature (e.g., AWS RDS, Google Cloud SQL, DigitalOcean Managed DB).
285:     *   **Frequency:** Daily automated snapshots.
286:     *   **Retention:** Start with **7 days**. Evaluate if longer retention (e.g., 14-30 days) is needed based on recovery requirements.
287:     *   **Verification:** **Schedule and perform quarterly test restores** of a recent backup to a temporary database instance to confirm integrity and practice the recovery procedure. Document the process.
288:     *   **Location:** Ensure backups are stored geographically separate (usually handled by cloud providers).
289: 
290: **5. Conclusion**
291: 
292: These concrete configurations provide a solid starting point for the Huberman App's infrastructure and DevOps practices. They establish a consistent local development environment, automate basic testing and validation via CI, and outline initial strategies for observing and protecting the application in deployed environments. Remember to version control `docker-compose.yml`, `Dockerfile`, `nginx.conf`, and `.github/workflows/ci.yml`, and adapt these configurations as the project evolves and specific hosting choices are finalized.
````

## File: app_documentation/openapi_backend.yaml
````yaml
   1: openapi: 3.0.0
   2: info:
   3:   title: Huberman App API
   4:   version: 1.0.0
   5:   description: API documentation for the Huberman App backend.
   6: servers:
   7:   - url: http://localhost:8000/api/v1
   8:     description: Local development server
   9: tags:
  10:   - name: Authentication
  11:     description: User authentication and registration
  12:   - name: UserManagement
  13:     description: User profile management
  14:   - name: SubscriptionBilling
  15:     description: Subscription plans and user subscriptions
  16:   - name: ContentManagement
  17:     description: Episodes, protocols, and summaries
  18:   - name: NotesService
  19:     description: User notes
  20:   - name: ProtocolEngine
  21:     description: Protocol reminders and tracking
  22:   - name: Webhooks
  23:     description: Webhook endpoints for third-party services
  24: paths:
  25:   /register:
  26:     post:
  27:       summary: Register a new user
  28:       tags:
  29:         - Authentication
  30:       requestBody:
  31:         required: true
  32:         content:
  33:           application/json:
  34:             schema:
  35:               $ref: '#/components/schemas/RegisterRequest'
  36:       responses:
  37:         '201':
  38:           description: User registered successfully
  39:           content:
  40:             application/json:
  41:               schema:
  42:                 $ref: '#/components/schemas/AuthSuccessResponse'
  43:         '422':
  44:           description: Validation errors
  45:           content:
  46:             application/json:
  47:               schema:
  48:                 $ref: '#/components/responses/ValidationError'
  49:   /login:
  50:     post:
  51:       summary: Log in a user
  52:       tags:
  53:         - Authentication
  54:       requestBody:
  55:         required: true
  56:         content:
  57:           application/json:
  58:             schema:
  59:               $ref: '#/components/schemas/LoginRequest'
  60:       responses:
  61:         '200':
  62:           description: User logged in successfully
  63:           content:
  64:             application/json:
  65:               schema:
  66:                 $ref: '#/components/schemas/AuthSuccessResponse'
  67:         '401':
  68:           description: Unauthorized
  69:           content:
  70:             application/json:
  71:               schema:
  72:                 $ref: '#/components/responses/UnauthorizedError'
  73:         '422':
  74:           description: Validation errors
  75:           content:
  76:             application/json:
  77:               schema:
  78:                 $ref: '#/components/responses/ValidationError'
  79:   /logout:
  80:     post:
  81:       summary: Log out the authenticated user
  82:       tags:
  83:         - Authentication
  84:       security:
  85:         - bearerAuth: []
  86:       responses:
  87:         '200':
  88:           description: User logged out successfully
  89:           content:
  90:             application/json:
  91:               schema:
  92:                 type: object
  93:                 properties:
  94:                   message:
  95:                     type: string
  96:                     example: Logged out successfully
  97:         '401':
  98:           description: Unauthorized
  99:           content:
 100:             application/json:
 101:               schema:
 102:                 $ref: '#/components/responses/UnauthorizedError'
 103:   /user/profile:
 104:     get:
 105:       summary: Get the authenticated user's profile
 106:       tags:
 107:         - UserManagement
 108:       security:
 109:         - bearerAuth: []
 110:       responses:
 111:         '200':
 112:           description: User profile
 113:           content:
 114:             application/json:
 115:               schema:
 116:                 $ref: '#/components/schemas/User'
 117:         '401':
 118:           description: Unauthorized
 119:           content:
 120:             application/json:
 121:               schema:
 122:                 $ref: '#/components/responses/UnauthorizedError'
 123:     put:
 124:       summary: Update the authenticated user's profile
 125:       tags:
 126:         - UserManagement
 127:       security:
 128:         - bearerAuth: []
 129:       requestBody:
 130:         required: true
 131:         content:
 132:           application/json:
 133:             schema:
 134:               $ref: '#/components/schemas/UpdateUserProfileRequest'
 135:       responses:
 136:         '200':
 137:           description: User profile updated successfully
 138:           content:
 139:             application/json:
 140:               schema:
 141:                 $ref: '#/components/schemas/User'
 142:         '401':
 143:           description: Unauthorized
 144:           content:
 145:             application/json:
 146:               schema:
 147:                 $ref: '#/components/responses/UnauthorizedError'
 148:         '422':
 149:           description: Validation errors
 150:           content:
 151:             application/json:
 152:               schema:
 153:                 $ref: '#/components/schemas/ValidationError'
 154:   /plans:
 155:     get:
 156:       summary: Get a list of available subscription plans
 157:       tags:
 158:         - SubscriptionBilling
 159:       responses:
 160:         '200':
 161:           description: List of plans
 162:           content:
 163:             application/json:
 164:               schema:
 165:                 type: array
 166:                 items:
 167:                   $ref: '#/components/schemas/Plan'
 168:   /user/subscription:
 169:     get:
 170:       summary: Get the authenticated user's subscription status
 171:       tags:
 172:         - SubscriptionBilling
 173:       security:
 174:         - bearerAuth: []
 175:       responses:
 176:         '200':
 177:           description: User subscription details
 178:           content:
 179:             application/json:
 180:               schema:
 181:                 $ref: '#/components/schemas/Subscription'
 182:         '401':
 183:           description: Unauthorized
 184:           content:
 185:             application/json:
 186:               schema:
 187:                 $ref: '#/components/responses/UnauthorizedError'
 188:   /episodes:
 189:     get:
 190:       summary: Get a list of episodes
 191:       tags:
 192:         - ContentManagement
 193:       responses:
 194:         '200':
 195:           description: List of episodes
 196:           content:
 197:             application/json:
 198:               schema:
 199:                 type: array
 200:                 items:
 201:                   $ref: '#/components/schemas/Episode'
 202:   /episodes/{id}:
 203:     get:
 204:       summary: Get episode details by ID
 205:       tags:
 206:         - ContentManagement
 207:       parameters:
 208:         - name: id
 209:           in: path
 210:           required: true
 211:           schema:
 212:             type: integer
 213:           description: ID of the episode to retrieve
 214:       responses:
 215:         '200':
 216:           description: Episode details
 217:           content:
 218:             application/json:
 219:               schema:
 220:                 $ref: '#/components/schemas/Episode'
 221:         '404':
 222:           description: Episode not found
 223:           content:
 224:             application/json:
 225:               schema:
 226:                 $ref: '#/components/responses/NotFound'
 227:   /protocols:
 228:     get:
 229:       summary: Get a list of protocols
 230:       tags:
 231:         - ContentManagement
 232:       responses:
 233:         '200':
 234:           description: List of protocols (content may vary based on subscription status)
 235:           content:
 236:             application/json:
 237:               schema:
 238:                 type: array
 239:                 items:
 240:                   $ref: '#/components/schemas/Protocol'
 241:   /protocols/{id}:
 242:     get:
 243:       summary: Get protocol details by ID
 244:       tags:
 245:         - ContentManagement
 246:       parameters:
 247:         - name: id
 248:           in: path
 249:           required: true
 250:           schema:
 251:             type: integer
 252:           description: ID of the protocol to retrieve
 253:       responses:
 254:         '200':
 255:           description: Protocol details (content may vary based on subscription status)
 256:           content:
 257:             application/json:
 258:               schema:
 259:                 $ref: '#/components/schemas/Protocol'
 260:         '404':
 261:           description: Protocol not found
 262:           content:
 263:             application/json:
 264:               schema:
 265:                 $ref: '#/components/responses/NotFound'
 266:   /summaries:
 267:     get:
 268:       summary: Get a list of summaries
 269:       tags:
 270:         - ContentManagement
 271:       parameters:
 272:         - name: episode_id
 273:           in: query
 274:           required: false
 275:           schema:
 276:             type: integer
 277:           description: Filter summaries by episode ID
 278:         - name: protocol_id
 279:           in: query
 280:           required: false
 281:           schema:
 282:             type: integer
 283:           description: Filter summaries by protocol ID
 284:       responses:
 285:         '200':
 286:           description: List of summaries
 287:           content:
 288:             application/json:
 289:               schema:
 290:                 type: array
 291:                 items:
 292:                   $ref: '#/components/schemas/Summary'
 293:   /notes:
 294:     get:
 295:       summary: Get a list of the authenticated user's notes
 296:       tags:
 297:         - NotesService
 298:       security:
 299:         - bearerAuth: []
 300:       responses:
 301:         '200':
 302:           description: List of notes
 303:           content:
 304:             application/json:
 305:               schema:
 306:                 type: array
 307:                 items:
 308:                   $ref: '#/components/schemas/Note'
 309:         '401':
 310:           description: Unauthorized
 311:           content:
 312:             application/json:
 313:               schema:
 314:                 $ref: '#/components/responses/UnauthorizedError'
 315:     post:
 316:       summary: Create a new note
 317:       tags:
 318:         - NotesService
 319:       security:
 320:         - bearerAuth: []
 321:       requestBody:
 322:         required: true
 323:         content:
 324:           application/json:
 325:             schema:
 326:               $ref: '#/components/schemas/CreateNoteRequest'
 327:       responses:
 328:         '201':
 329:           description: Note created successfully
 330:           content:
 331:             application/json:
 332:               schema:
 333:                 $ref: '#/components/schemas/Note'
 334:         '401':
 335:           description: Unauthorized
 336:           content:
 337:             application/json:
 338:               schema:
 339:                 $ref: '#/components/responses/UnauthorizedError'
 340:         '403':
 341:           description: Forbidden (e.g., premium limit reached)
 342:           content:
 343:             application/json:
 344:               schema:
 345:                 $ref: '#/components/responses/ForbiddenError'
 346:         '422':
 347:           description: Validation errors
 348:           content:
 349:             application/json:
 350:               schema:
 351:                 $ref: '#/components/responses/ValidationError'
 352:   /notes/{id}:
 353:     get:
 354:       summary: Get a specific note by ID
 355:       tags:
 356:         - NotesService
 357:       security:
 358:         - bearerAuth: []
 359:       parameters:
 360:         - name: id
 361:           in: path
 362:           required: true
 363:           schema:
 364:             type: integer
 365:           description: ID of the note to retrieve
 366:       responses:
 367:         '200':
 368:           description: Note details
 369:           content:
 370:             application/json:
 371:               schema:
 372:                 $ref: '#/components/schemas/Note'
 373:         '401':
 374:           description: Unauthorized
 375:           content:
 376:             application/json:
 377:               schema:
 378:                 $ref: '#/components/responses/UnauthorizedError'
 379:         '403':
 380:           description: Forbidden (user does not own the note)
 381:           content:
 382:             application/json:
 383:               schema:
 384:                 $ref: '#/components/responses/ForbiddenError'
 385:         '404':
 386:           description: Note not found
 387:           content:
 388:             application/json:
 389:               schema:
 390:                 $ref: '#/components/schemas/NotFound'
 391:     put:
 392:       summary: Update a specific note by ID
 393:       tags:
 394:         - NotesService
 395:       security:
 396:         - bearerAuth: []
 397:       parameters:
 398:         - name: id
 399:           in: path
 400:           required: true
 401:           schema:
 402:             type: integer
 403:           description: ID of the note to update
 404:       requestBody:
 405:         required: true
 406:         content:
 407:           application/json:
 408:             schema:
 409:               $ref: '#/components/schemas/UpdateNoteRequest'
 410:       responses:
 411:         '200':
 412:           description: Note updated successfully
 413:           content:
 414:             application/json:
 415:               schema:
 416:                 $ref: '#/components/schemas/Note'
 417:         '401':
 418:           description: Unauthorized
 419:           content:
 420:             application/json:
 421:               schema:
 422:                 $ref: '#/components/responses/UnauthorizedError'
 423:         '403':
 424:           description: Forbidden (user does not own the note)
 425:           content:
 426:             application/json:
 427:               schema:
 428:                 $ref: '#/components/responses/ForbiddenError'
 429:         '404':
 430:           description: Note not found
 431:           content:
 432:             application/json:
 433:               schema:
 434:                 $ref: '#/components/responses/NotFound'
 435:         '422':
 436:           description: Validation errors
 437:           content:
 438:             application/json:
 439:               schema:
 440:                 $ref: '#/components/schemas/ValidationError'
 441:     delete:
 442:       summary: Delete a specific note by ID
 443:       tags:
 444:         - NotesService
 445:       security:
 446:         - bearerAuth: []
 447:       parameters:
 448:         - name: id
 449:           in: path
 450:           required: true
 451:           schema:
 452:             type: integer
 453:           description: ID of the note to delete
 454:       responses:
 455:         '204':
 456:           description: Note deleted successfully
 457:         '401':
 458:           description: Unauthorized
 459:           content:
 460:             application/json:
 461:               schema:
 462:                 $ref: '#/components/responses/UnauthorizedError'
 463:         '403':
 464:           description: Forbidden (user does not own the note)
 465:           content:
 466:             application/json:
 467:               schema:
 468:                 $ref: '#/components/responses/ForbiddenError'
 469:         '404':
 470:           description: Note not found
 471:           content:
 472:             application/json:
 473:               schema:
 474:                 $ref: '#/components/responses/NotFound'
 475:   /episodes/{id}/public-notes:
 476:     get:
 477:       summary: Get public notes for a specific episode
 478:       tags:
 479:         - NotesService
 480:       parameters:
 481:         - name: id
 482:           in: path
 483:           required: true
 484:           schema:
 485:             type: integer
 486:           description: ID of the episode to retrieve public notes for
 487:       responses:
 488:         '200':
 489:           description: List of public notes for the episode
 490:           content:
 491:             application/json:
 492:               schema:
 493:                 type: array
 494:                 items:
 495:                   $ref: '#/components/schemas/Note'
 496:         '404':
 497:           description: Episode not found
 498:           content:
 499:             application/json:
 500:               schema:
 501:                 $ref: '#/components/responses/NotFound'
 502:   /reminders:
 503:     get:
 504:       summary: Get a list of the authenticated user's reminders (Premium)
 505:       tags:
 506:         - ProtocolEngine
 507:       security:
 508:         - bearerAuth: []
 509:       responses:
 510:         '200':
 511:           description: List of reminders
 512:           content:
 513:             application/json:
 514:               schema:
 515:                 type: array
 516:                 items:
 517:                   $ref: '#/components/schemas/Reminder'
 518:         '401':
 519:           description: Unauthorized
 520:           content:
 521:             application/json:
 522:               schema:
 523:                 $ref: '#/components/responses/UnauthorizedError'
 524:         '403':
 525:           description: Forbidden (requires Premium)
 526:           content:
 527:             application/json:
 528:               schema:
 529:                 $ref: '#/components/responses/ForbiddenError'
 530:     post:
 531:       summary: Create a new reminder (Premium)
 532:       tags:
 533:         - ProtocolEngine
 534:       security:
 535:         - bearerAuth: []
 536:       requestBody:
 537:         required: true
 538:         content:
 539:           application/json:
 540:             schema:
 541:               $ref: '#/components/schemas/StoreReminderRequest'
 542:       responses:
 543:         '201':
 544:           description: Reminder created successfully
 545:           content:
 546:             application/json:
 547:               schema:
 548:                 $ref: '#/components/schemas/Reminder'
 549:         '401':
 550:           description: Unauthorized
 551:           content:
 552:             application/json:
 553:               schema:
 554:                 $ref: '#/components/responses/UnauthorizedError'
 555:         '403':
 556:           description: Forbidden (requires Premium)
 557:           content:
 558:             application/json:
 559:               schema:
 560:                 $ref: '#/components/responses/ForbiddenError'
 561:         '422':
 562:           description: Validation errors
 563:           content:
 564:             application/json:
 565:               schema:
 566:                 $ref: '#/components/responses/ValidationError'
 567:   /reminders/{id}:
 568:     get:
 569:       summary: Get a specific reminder by ID (Premium)
 570:       tags:
 571:         - ProtocolEngine
 572:       security:
 573:         - bearerAuth: []
 574:       parameters:
 575:         - name: id
 576:           in: path
 577:           required: true
 578:           schema:
 579:             type: integer
 580:           description: ID of the reminder to retrieve
 581:       responses:
 582:         '200':
 583:           description: Reminder details
 584:           content:
 585:             application/json:
 586:               schema:
 587:                 $ref: '#/components/schemas/Reminder'
 588:         '401':
 589:           description: Unauthorized
 590:           content:
 591:             application/json:
 592:               schema:
 593:                 $ref: '#/components/responses/UnauthorizedError'
 594:         '403':
 595:           description: Forbidden (requires Premium or user does not own reminder)
 596:           content:
 597:             application/json:
 598:               schema:
 599:                 $ref: '#/components/responses/ForbiddenError'
 600:         '404':
 601:           description: Reminder not found
 602:           content:
 603:             application/json:
 604:               schema:
 605:                 $ref: '#/components/responses/NotFound'
 606:     put:
 607:       summary: Update a specific reminder by ID (Premium)
 608:       tags:
 609:         - ProtocolEngine
 610:       security:
 611:         - bearerAuth: []
 612:       parameters:
 613:         - name: id
 614:           in: path
 615:           required: true
 616:           schema:
 617:             type: integer
 618:           description: ID of the reminder to update
 619:       requestBody:
 620:         required: true
 621:         content:
 622:           application/json:
 623:             schema:
 624:               $ref: '#/components/schemas/UpdateReminderRequest'
 625:       responses:
 626:         '200':
 627:           description: Reminder updated successfully
 628:           content:
 629:             application/json:
 630:               schema:
 631:                 $ref: '#/components/schemas/Reminder'
 632:         '401':
 633:           description: Unauthorized
 634:           content:
 635:             application/json:
 636:               schema:
 637:                 $ref: '#/components/responses/UnauthorizedError'
 638:         '403':
 639:           description: Forbidden (requires Premium or user does not own reminder)
 640:           content:
 641:             application/json:
 642:               schema:
 643:                 $ref: '#/components/responses/ForbiddenError'
 644:         '404':
 645:           description: Reminder not found
 646:           content:
 647:             application/json:
 648:               schema:
 649:                 $ref: '#/components/responses/NotFound'
 650:         '422':
 651:           description: Validation errors
 652:           content:
 653:             application/json:
 654:               schema:
 655:                 $ref: '#/components/schemas/ValidationError'
 656:     delete:
 657:       summary: Delete a specific reminder by ID (Premium)
 658:       tags:
 659:         - ProtocolEngine
 660:       security:
 661:         - bearerAuth: []
 662:       parameters:
 663:         - name: id
 664:           in: path
 665:           required: true
 666:           schema:
 667:             type: integer
 668:           description: ID of the reminder to delete
 669:       responses:
 670:         '204':
 671:           description: Reminder deleted successfully
 672:         '401':
 673:           description: Unauthorized
 674:           content:
 675:             application/json:
 676:               schema:
 677:                 $ref: '#/components/responses/UnauthorizedError'
 678:         '403':
 679:           description: Forbidden (requires Premium or user does not own reminder)
 680:           content:
 681:             application/json:
 682:               schema:
 683:                 $ref: '#/components/responses/ForbiddenError'
 684:         '404':
 685:           description: Reminder not found
 686:           content:
 687:             application/json:
 688:               schema:
 689:                 $ref: '#/components/responses/NotFound'
 690:   /tracking/log:
 691:     post:
 692:       summary: Log adherence to a protocol step (Premium)
 693:       tags:
 694:         - ProtocolEngine
 695:       security:
 696:         - bearerAuth: []
 697:       requestBody:
 698:         required: true
 699:         content:
 700:           application/json:
 701:             schema:
 702:               $ref: '#/components/schemas/StoreTrackingLogRequest'
 703:       responses:
 704:         '201':
 705:           description: Tracking log created successfully
 706:           content:
 707:             application/json:
 708:               schema:
 709:                 $ref: '#/components/schemas/TrackingLog'
 710:         '401':
 711:           description: Unauthorized
 712:           content:
 713:             application/json:
 714:               schema:
 715:                 $ref: '#/components/responses/UnauthorizedError'
 716:         '403':
 717:           description: Forbidden (requires Premium)
 718:           content:
 719:             application/json:
 720:               schema:
 721:                 $ref: '#/components/responses/ForbiddenError'
 722:         '422':
 723:           description: Validation errors
 724:           content:
 725:             application/json:
 726:               schema:
 727:                 $ref: '#/components/responses/ValidationError'
 728:   /tracking/summary:
 729:     get:
 730:       summary: Get the authenticated user's protocol tracking summary (Premium)
 731:       tags:
 732:         - ProtocolEngine
 733:       security:
 734:         - bearerAuth: []
 735:       responses:
 736:         '200':
 737:           description: Protocol tracking summary
 738:           content:
 739:             application/json:
 740:               schema:
 741:                 type: object
 742:                 properties:
 743:                   total_logs:
 744:                     type: integer
 745:                     example: 100
 746:                   streak:
 747:                     type: integer
 748:                     example: 7
 749:         '401':
 750:           description: Unauthorized
 751:           content:
 752:             application/json:
 753:               schema:
 754:                 $ref: '#/components/responses/UnauthorizedError'
 755:         '403':
 756:           description: Forbidden (requires Premium)
 757:           content:
 758:             application/json:
 759:               schema:
 760:                 $ref: '#/components/responses/ForbiddenError'
 761:   /webhooks/stripe:
 762:     post:
 763:       summary: Stripe webhook endpoint
 764:       tags:
 765:         - Webhooks
 766:       description: Receives webhook events from Stripe. Security is via signature verification.
 767:       requestBody:
 768:         required: true
 769:         content:
 770:           application/json:
 771:             schema:
 772:               type: object
 773:       responses:
 774:         '200':
 775:           description: Webhook received successfully
 776:         '400':
 777:           description: Invalid request or signature
 778:           content:
 779:             application/json:
 780:               schema:
 781:                 $ref: '#/components/schemas/ErrorResponse'
 782:   /webhooks/apple:
 783:     post:
 784:       summary: Apple App Store server notifications webhook endpoint
 785:       tags:
 786:         - Webhooks
 787:       description: Receives server notifications from Apple App Store. Security is via signature verification.
 788:       requestBody:
 789:         required: true
 790:         content:
 791:           application/json:
 792:             schema:
 793:               type: object
 794:       responses:
 795:         '200':
 796:           description: Webhook received successfully
 797:         '400':
 798:           description: Invalid request or signature
 799:           content:
 800:             application/json:
 801:               schema:
 802:                 $ref: '#/components/schemas/ErrorResponse'
 803:   /webhooks/google:
 804:     post:
 805:       summary: Google Play Store real-time developer notifications webhook endpoint
 806:       tags:
 807:         - Webhooks
 808:       description: Receives real-time developer notifications from Google Play Store. Security is via signature verification.
 809:       requestBody:
 810:         required: true
 811:         content:
 812:           application/json:
 813:             schema:
 814:               type: object
 815:       responses:
 816:         '200':
 817:           description: Webhook received successfully
 818:         '400':
 819:           description: Invalid request or signature
 820:           content:
 821:             application/json:
 822:               schema:
 823:                 $ref: '#/components/schemas/ErrorResponse'
 824: components:
 825:   schemas:
 826:     RegisterRequest:
 827:       type: object
 828:       properties:
 829:         name:
 830:           type: string
 831:           description: User's name
 832:           example: John Doe
 833:         email:
 834:           type: string
 835:           format: email
 836:           description: User's email address
 837:           example: john.doe@example.com
 838:         password:
 839:           type: string
 840:           format: password
 841:           description: User's password
 842:           example: password123
 843:         password_confirmation:
 844:           type: string
 845:           format: password
 846:           description: Password confirmation
 847:           example: password123
 848:       required:
 849:         - name
 850:         - email
 851:         - password
 852:         - password_confirmation
 853:     LoginRequest:
 854:       type: object
 855:       properties:
 856:         email:
 857:           type: string
 858:           format: email
 859:           description: User's email address
 860:           example: john.doe@example.com
 861:         password:
 862:           type: string
 863:           format: password
 864:           description: User's password
 865:           example: password123
 866:       required:
 867:         - email
 868:         - password
 869:     AuthSuccessResponse:
 870:       type: object
 871:       properties:
 872:         user:
 873:           $ref: '#/components/schemas/User'
 874:         token:
 875:           type: string
 876:           description: Authentication token
 877:           example: 1|abcdefghijklmnopqrstuvwxyz1234567890
 878:     User:
 879:       type: object
 880:       properties:
 881:         id:
 882:           type: integer
 883:           description: User ID
 884:           example: 1
 885:         name:
 886:           type: string
 887:           description: User's name
 888:           example: John Doe
 889:         email:
 890:           type: string
 891:           format: email
 892:           description: User's email address
 893:           example: john.doe@example.com
 894:         created_at:
 895:           type: string
 896:           format: date-time
 897:           description: User creation timestamp
 898:         updated_at:
 899:           type: string
 900:           format: date-time
 901:           description: User update timestamp
 902:     UpdateUserProfileRequest:
 903:       type: object
 904:       properties:
 905:         name:
 906:           type: string
 907:           description: User's name
 908:           example: Jane Doe
 909:         email:
 910:           type: string
 911:           format: email
 912:           description: User's email address
 913:           example: jane.doe@example.com
 914:     Plan:
 915:       type: object
 916:       properties:
 917:         id:
 918:           type: integer
 919:           description: Plan ID
 920:           example: 1
 921:         name:
 922:           type: string
 923:           description: Plan name
 924:           example: Premium
 925:         stripe_price_id:
 926:           type: string
 927:           description: Stripe price ID
 928:           example: price_12345
 929:         apple_product_id:
 930:           type: string
 931:           description: Apple App Store product ID
 932:           example: com.example.premium
 933:         google_product_id:
 934:           type: string
 935:           description: Google Play Store product ID
 936:           example: premium_monthly
 937:         created_at:
 938:           type: string
 939:           format: date-time
 940:           description: Plan creation timestamp
 941:         updated_at:
 942:           type: string
 943:           format: date-time
 944:           description: Plan update timestamp
 945:     Subscription:
 946:       type: object
 947:       properties:
 948:         id:
 949:           type: integer
 950:           description: Subscription ID
 951:           example: 1
 952:         user_id:
 953:           type: integer
 954:           description: User ID
 955:           example: 1
 956:         plan_id:
 957:           type: integer
 958:           description: Plan ID
 959:           example: 1
 960:         stripe_subscription_id:
 961:           type: string
 962:           nullable: true
 963:           description: Stripe subscription ID
 964:           example: sub_12345
 965:         apple_subscription_id:
 966:           type: string
 967:           nullable: true
 968:           description: Apple App Store subscription ID
 969:           example: 1234567890
 970:         google_subscription_id:
 971:           type: string
 972:           nullable: true
 973:           description: Google Play Store subscription ID
 974:           example: abcdefg
 975:         active:
 976:           type: boolean
 977:           description: Whether the subscription is active
 978:           example: true
 979:         renews_at:
 980:           type: string
 981:           format: date-time
 982:           nullable: true
 983:           description: Timestamp when the subscription renews
 984:         ends_at:
 985:           type: string
 986:           format: date-time
 987:           nullable: true
 988:           description: Timestamp when the subscription ends
 989:         created_at:
 990:           type: string
 991:           format: date-time
 992:           description: Subscription creation timestamp
 993:         updated_at:
 994:           type: string
 995:           format: date-time
 996:           description: Subscription update timestamp
 997:     Episode:
 998:       type: object
 999:       properties:
1000:         id:
1001:           type: integer
1002:           description: Episode ID
1003:           example: 1
1004:         title:
1005:           type: string
1006:           description: Episode title
1007:           example: The Science of Sleep
1008:         description:
1009:           type: string
1010:           description: Episode description
1011:           example: Dr. Andrew Huberman discusses the science of sleep...
1012:         video_url:
1013:           type: string
1014:           format: url
1015:           description: URL to the episode video
1016:           example: https://www.youtube.com/watch?v=nm1TxQ9IsPQ
1017:         published_date:
1018:           type: string
1019:           format: date
1020:           description: Date the episode was published
1021:           example: 2023-01-15
1022:         created_at:
1023:           type: string
1024:           format: date-time
1025:           description: Episode creation timestamp
1026:         updated_at:
1027:           type: string
1028:           format: date-time
1029:           description: Episode update timestamp
1030:     Protocol:
1031:       type: object
1032:       properties:
1033:         id:
1034:           type: integer
1035:           description: Protocol ID
1036:           example: 1
1037:         title:
1038:           type: string
1039:           description: Protocol title
1040:           example: Morning Sunlight Exposure
1041:         description:
1042:           type: string
1043:           description: Description of the protocol
1044:           example: Expose your eyes to sunlight within 30 minutes of waking...
1045:         is_free:
1046:           type: boolean
1047:           description: Indicates if the protocol is free or requires premium
1048:           example: true
1049:         created_at:
1050:           type: string
1051:           format: date-time
1052:           description: Protocol creation timestamp
1053:         updated_at:
1054:           type: string
1055:           format: date-time
1056:           description: Protocol update timestamp
1057:     Summary:
1058:       type: object
1059:       properties:
1060:         id:
1061:           type: integer
1062:           description: Summary ID
1063:           example: 1
1064:         episode_id:
1065:           type: integer
1066:           nullable: true
1067:           description: Associated episode ID
1068:           example: 1
1069:         protocol_id:
1070:           type: integer
1071:           nullable: true
1072:           description: Associated protocol ID
1073:           example: 1
1074:         content:
1075:           type: string
1076:           description: Summary content
1077:           example: Key takeaways from the episode/protocol...
1078:         created_at:
1079:           type: string
1080:           format: date-time
1081:           description: Summary creation timestamp
1082:         updated_at:
1083:           type: string
1084:           format: date-time
1085:           description: Summary update timestamp
1086:     Note:
1087:       type: object
1088:       properties:
1089:         id:
1090:           type: integer
1091:           description: Note ID
1092:           example: 1
1093:         user_id:
1094:           type: integer
1095:           description: User ID
1096:           example: 1
1097:         episode_id:
1098:           type: integer
1099:           nullable: true
1100:           description: Associated episode ID
1101:           example: 1
1102:         protocol_id:
1103:           type: integer
1104:           nullable: true
1105:           description: Associated protocol ID
1106:           example: 1
1107:         content:
1108:           type: string
1109:           description: Note content
1110:           example: My thoughts on this topic...
1111:         is_public:
1112:           type: boolean
1113:           description: Indicates if the note is public
1114:           example: false
1115:         created_at:
1116:           type: string
1117:           format: date-time
1118:           description: Note creation timestamp
1119:         updated_at:
1120:           type: string
1121:           format: date-time
1122:           description: Note update timestamp
1123:     CreateNoteRequest:
1124:       type: object
1125:       properties:
1126:         episode_id:
1127:           type: integer
1128:           nullable: true
1129:           description: Associated episode ID
1130:           example: 1
1131:         protocol_id:
1132:           type: integer
1133:           nullable: true
1134:           description: Associated protocol ID
1135:           example: 1
1136:         content:
1137:           type: string
1138:           description: Note content
1139:           example: My thoughts on this topic...
1140:         is_public:
1141:           type: boolean
1142:           description: Indicates if the note is public
1143:           example: false
1144:       required:
1145:         - content
1146:     UpdateNoteRequest:
1147:       type: object
1148:       properties:
1149:         content:
1150:           type: string
1151:           description: Note content
1152:           example: Updated thoughts on this topic...
1153:         is_public:
1154:           type: boolean
1155:           description: Indicates if the note is public
1156:           example: true
1157:       required:
1158:         - content
1159:     Reminder:
1160:       type: object
1161:       properties:
1162:         id:
1163:           type: integer
1164:           description: Reminder ID
1165:           example: 1
1166:         user_id:
1167:           type: integer
1168:           description: User ID
1169:           example: 1
1170:         protocol_id:
1171:           type: integer
1172:           description: Associated protocol ID
1173:           example: 1
1174:         reminder_time:
1175:           type: string
1176:           format: date-time
1177:           description: Timestamp for the reminder
1178:         created_at:
1179:           type: string
1180:           format: date-time
1181:           description: Reminder creation timestamp
1182:         updated_at:
1183:           type: string
1184:           format: date-time
1185:           description: Reminder update timestamp
1186:     TrackingLog:
1187:       type: object
1188:       properties:
1189:         id:
1190:           type: integer
1191:           description: Tracking log ID
1192:           example: 1
1193:         user_id:
1194:           type: integer
1195:           description: User ID
1196:           example: 1
1197:         protocol_id:
1198:           type: integer
1199:           description: Associated protocol ID
1200:           example: 1
1201:         logged_at:
1202:           type: string
1203:           format: date-time
1204:           description: Timestamp when adherence was logged
1205:         created_at:
1206:           type: string
1207:           format: date-time
1208:           description: Tracking log creation timestamp
1209:         updated_at:
1210:           type: string
1211:           format: date-time
1212:           description: Tracking log update timestamp
1213:     StoreReminderRequest:
1214:       type: object
1215:       properties:
1216:         protocol_id:
1217:           type: integer
1218:           description: Associated protocol ID
1219:           example: 1
1220:         reminder_time:
1221:           type: string
1222:           format: date-time
1223:           description: Timestamp for the reminder
1224:       required:
1225:         - protocol_id
1226:         - reminder_time
1227:     UpdateReminderRequest:
1228:       type: object
1229:       properties:
1230:         reminder_time:
1231:           type: string
1232:           format: date-time
1233:           description: Timestamp for the reminder
1234:       required:
1235:         - reminder_time
1236:     StoreTrackingLogRequest:
1237:       type: object
1238:       properties:
1239:         protocol_id:
1240:           type: integer
1241:           description: Associated protocol ID
1242:           example: 1
1243:         logged_at:
1244:           type: string
1245:           format: date-time
1246:           description: Timestamp when adherence was logged
1247:       required:
1248:         - protocol_id
1249:         - logged_at
1250:   securitySchemes:
1251:     bearerAuth:
1252:       type: http
1253:       scheme: bearer
1254:       bearerFormat: Sanctum
1255:   responses:
1256:     UnauthorizedError:
1257:       description: Unauthorized
1258:       content:
1259:         application/json:
1260:           schema:
1261:             $ref: '#/components/schemas/ErrorResponse'
1262:     ValidationError:
1263:       description: Validation errors
1264:       content:
1265:         application/json:
1266:           schema:
1267:             $ref: '#/components/schemas/ValidationErrorResponse'
1268:     ErrorResponse:
1269:       type: object
1270:       properties:
1271:         message:
1272:           type: string
1273:           description: General error message.
1274:           example: An error occurred.
1275:     ValidationErrorResponse:
1276:       type: object
1277:       properties:
1278:         message:
1279:           type: string
1280:           description: General error message for validation failures.
1281:           example: The given data was invalid.
1282:         errors:
1283:           type: object
1284:           additionalProperties:
1285:             type: array
1286:             items:
1287:               type: string
1288:           description: Field-specific validation errors.
1289:           example:
1290:             email:
1291:               - The email field is required.
1292:             password:
1293:               - The password field is required.
1294:     NotFound:
1295:       description: Resource not found
1296:       content:
1297:         application/json:
1298:           schema:
1299:             $ref: '#/components/schemas/ErrorResponse'
1300:     ForbiddenError:
1301:       description: Forbidden
1302:       content:
1303:         application/json:
1304:           schema:
1305:             $ref: '#/components/schemas/ErrorResponse'
1306: </final_file_content>
1307: IMPORTANT: For any future changes to this file, use the final_file_content shown above as your reference. This content reflects the current state of the file, including any auto-formatting (e.g., if you used single quotes but the formatter converted them to double quotes). Always base your SEARCH/REPLACE operations on this final version to ensure accuracy.
1308: <environment_details>
1309: app_documentation/openapi.yaml
1310: ../../Library/Application Support/Code/User/settings.json
1311: docker-compose.yml
1312: config/sanctum.php
1313: .gitignore
1314: app/Modules/Authentication/Providers/RouteServiceProvider.php
1315: app/Modules/UserManagement/Providers/RouteServiceProvider.php
1316: app/Modules/NotesService/Providers/RouteServiceProvider.php
1317: app/Modules/ProtocolEngine/Providers/RouteServiceProvider.php
1318: app_documentation/route_refactor_todo.md
1319: database/migrations/2025_04_24_205454_create_plans_table.php
1320: database/migrations/2025_04_24_205510_create_subscriptions_table.php
1321: tests/Unit/PlanTest.php
1322: app/Modules/SubscriptionBilling/Models/Plan.php
1323: config/cashier.php
1324: app/Modules/SubscriptionBilling/Contracts/SubscriptionServiceInterface.php
1325: app/Modules/SubscriptionBilling/Providers/RouteServiceProvider.php
1326: database/seeders/PlanSeeder.php
1327: app/Modules/SubscriptionBilling/Http/Resources/PlanResource.php
1328: tests/Feature/SubscriptionBilling/PlanTest.php
1329: app/Modules/SubscriptionBilling/Http/Resources/SubscriptionResource.php
1330: app/Modules/SubscriptionBilling/Http/Controllers/SubscriptionController.php
1331: tests/Feature/SubscriptionBilling/UserSubscriptionTest.php
1332: app/Http/Middleware/VerifyStripeWebhookSignature.php
1333: tests/Feature/SubscriptionBilling/WebhookSignatureTest.php
1334: database/migrations/2025_04_24_211846_create_episodes_table.php
1335: database/migrations/2025_04_24_211928_create_protocols_table.php
1336: database/migrations/2025_04_24_212127_create_summaries_table.php
1337: database/migrations/2025_04_24_212153_create_episode_protocol_table.php
1338: app/Modules/ContentManagement/Models/Summary.php
1339: app/Modules/ContentManagement/Models/Episode.php
1340: tests/Unit/ProtocolTest.php
1341: tests/Unit/SummaryTest.php
1342: tests/Unit/EpisodeTest.php
1343: database/seeders/EpisodeSeeder.php
1344: database/seeders/SummarySeeder.php
1345: database/seeders/EpisodeProtocolSeeder.php
1346: app/Modules/ContentManagement/Providers/RouteServiceProvider.php
1347: app/Modules/ContentManagement/Http/Resources/EpisodeResource.php
1348: app/Modules/ContentManagement/Http/Resources/SummaryResource.php
1349: tests/Feature/ContentManagement/EpisodeTest.php
1350: app/Modules/ContentManagement/Http/Controllers/SummaryController.php
1351: tests/Feature/ContentManagement/SummaryTest.php
1352: tests/Unit/SubscriptionServiceTest.php
1353: app/Http/Middleware/CheckPremiumAccess.php
1354: tests/Feature/Middleware/CheckPremiumAccessTest.php
1355: tests/Feature/SubscriptionBilling/WebhookCheckoutSessionCompletedTest.php
1356: database/migrations/2025_04_24_195725_add_is_free_to_protocols_table.php
1357: database/factories/ProtocolFactory.php
1358: database/seeders/ProtocolSeeder.php
1359: database/seeders/DatabaseSeeder.php
1360: app/Modules/ContentManagement/Http/Resources/ProtocolResource.php
1361: app/Modules/ContentManagement/Http/Controllers/ProtocolController.php
1362: app/Modules/ContentManagement/Contracts/ContentServiceInterface.php
1363: app/Modules/ContentManagement/Services/ContentService.php
1364: app/Notifications/ResetPasswordNotification.php
1365: app/Modules/Authentication/Http/Requests/ForgotPasswordRequest.php
1366: app/Modules/Authentication/Http/Requests/ResetPasswordRequest.php
1367: app/Modules/Authentication/Http/Controllers/ForgotPasswordController.php
1368: app/Modules/Authentication/Http/Controllers/NewPasswordController.php
1369: tests/Feature/Authentication/RateLimitTest.php
1370: bootstrap/app.php
1371: bootstrap/providers.php
1372: app/Modules/SubscriptionBilling/routes/api.php
1373: app_documentation/api_design_documentation.md
1374: app_documentation/openapi.yaml
1375: app/Modules/SubscriptionBilling/Contracts/AppStoreServerApiClientInterface.php
1376: app/Modules/SubscriptionBilling/Services/AppStoreServerApiClient.php
1377: app/Modules/SubscriptionBilling/Providers/SubscriptionBillingServiceProvider.php
1378: app/Listeners/SubscriptionRenewalFailedListener.php
1379: app/Listeners/SubscriptionExpiredListener.php
1380: tests/Unit/SubscriptionBilling/SubscriptionRenewalFailedTest.php
1381: tests/Unit/SubscriptionBilling/SubscriptionExpiredTest.php
1382: tests/Unit/SubscriptionBilling/GooglePubSubTest.php
1383: app/Listeners/ClearUserEntitlementCache.php
1384: tests/Unit/ClearUserEntitlementCacheTest.php
1385: app_documentation/app_description.md
1386: app/Modules/ContentManagement/Models/Protocol.php
1387: app/Console/Commands/SendFoundationalReminders.php
1388: tests/Feature/SendFoundationalRemindersTest.php
1389: tests/Feature/ContentManagement/ProtocolTest.php
1390: database/factories/UserReminderFactory.php
1391: tests/Feature/Policies/ReminderPolicyTest.php
1392: app/Modules/ProtocolEngine/Http/Requests/StoreReminderRequest.php
1393: app/Modules/ProtocolEngine/Contracts/ReminderServiceInterface.php
1394: app/Modules/ProtocolEngine/Http/Resources/ReminderResource.php
1395: app/Modules/ProtocolEngine/Policies/ReminderPolicy.php
1396: app/Modules/ProtocolEngine/routes/api.php
1397: app/Modules/ProtocolEngine/Http/Requests/UpdateReminderRequest.php
1398: tests/Feature/ProtocolEngine/ReminderApiTest.php
1399: app/Modules/ProtocolEngine/Http/Controllers/ReminderController.php
1400: app/Modules/ProtocolEngine/Services/ReminderService.php
1401: tests/Unit/Console/Commands/SendDueRemindersTest.php
1402: app/Console/Kernel.php
1403: app/Console/Commands/SendDueReminders.php
1404: app/Notifications/ProtocolReminder.php
1405: tests/Unit/Jobs/SendProtocolReminderNotificationTest.php
1406: app/Jobs/SendProtocolReminderNotification.php
1407: database/migrations/2025_04_30_104700_create_user_devices_table.php
1408: tests/Unit/UserDeviceTest.php
1409: app/Modules/UserManagement/Models/User.php
1410: app/Modules/UserManagement/Models/UserDevice.php
1411: app/Modules/UserManagement/Http/Requests/UpdateDeviceTokenRequest.php
1412: app/Modules/UserManagement/Http/Controllers/UserController.php
1413: app/Modules/UserManagement/routes/api.php
1414: database/migrations/2025_04_30_074905_create_notes_table.php
1415: tests/Unit/NoteTest.php
1416: tests/Unit/NotePolicyTest.php
1417: app/Modules/NotesService/Contracts/NoteServiceInterface.php
1418: app/Modules/NotesService/Providers/NotesServiceProvider.php
1419: tests/Unit/NoteServiceTest.php
1420: app/Modules/Authentication/routes/api.php
1421: app/Modules/Authentication/Http/Requests/CreateUserRequest.php
1422: app/Modules/Authentication/Http/Controllers/AuthController.php
1423: app/Modules/NotesService/Http/Requests/CreateNoteRequest.php
1424: app/Modules/NotesService/Http/Requests/UpdateNoteRequest.php
1425: app/Modules/ContentManagement/Http/Controllers/EpisodeController.php
1426: app/Modules/ContentManagement/routes/api.php
1427: tests/Feature/NotesApiTest.php
1428: app/Modules/NotesService/Http/Controllers/NoteController.php
1429: app/Modules/NotesService/routes/api.php
1430: app/Modules/TrackingService/Models/TrackingLog.php
1431: tests/Unit/TrackingService/TrackingLogTest.php
1432: app/Modules/TrackingService/Providers/TrackingServiceProvider.php
1433: app/Modules/TrackingService/Providers/RouteServiceProvider.php
1434: config/app.php
1435: app/Modules/TrackingService/routes/api.php
1436: app/Modules/TrackingService/Policies/TrackingLogPolicy.php
1437: tests/Feature/Policies/TrackingLogPolicyTest.php
1438: app/Modules/TrackingService/Contracts/TrackingServiceInterface.php
1439: app/Modules/TrackingService/Services/TrackingService.php
1440: tests/Unit/TrackingService/TrackingServiceTest.php
1441: tests/Feature/TrackingService/TrackingLogAdherenceTest.php
1442: app/Modules/TrackingService/Http/Requests/StoreTrackingLogRequest.php
1443: app/Modules/TrackingService/Http/Controllers/TrackingController.php
1444: app/OfflineData.php
1445: database/migrations/2025_05_01_092540_create_offline_data_table.php
1446: database/factories/OfflineDataFactory.php
1447: tests/Unit/OfflineDataTest.php
1448: app/Modules/NotesService/Models/NoteCategory.php
1449: app/Modules/NotesService/Models/NoteTag.php
1450: database/migrations/2025_05_01_100000_create_note_categories_table.php
1451: database/migrations/2025_05_01_100001_create_note_tags_table.php
1452: database/migrations/2025_05_01_100002_create_note_category_pivot_table.php
1453: database/migrations/2023_05_01_100003_create_note_tag_pivot_table.php
1454: database/migrations/2025_05_01_100003_create_note_tag_pivot_table.php
1455: app/Models/NoteTag.php
1456: app/Http/Controllers/NoteTagController.php
1457: tests/Feature/NoteTagTest.php
1458: database/factories/NoteTagFactory.php
1459: app/Http/Controllers/NoteCategoryController.php
1460: tests/Feature/NoteCategoryTest.php
1461: app/Http/Controllers/NoteController.php
1462: app/Services/RoutineServiceInterface.php
1463: app/Services/RoutineService.php
1464: app/Http/Controllers/RoutineController.php
1465: app/Services/NoteServiceInterface.php
1466: database/migrations/2025_05_01_100004_create_user_protocol_tracking_table.php
1467: app_documentation/backend_implementation_todo.md
1468: app/Policies/OfflineDataPolicy.php
1469: tests/Unit/OfflineDataPolicyTest.php
1470: app/Services/OfflineDataServiceInterface.php
1471: app/Services/OfflineDataService.php
1472: app/Providers/AppServiceProvider.php
1473: tests/Unit/OfflineDataServiceTest.php
1474: app/Http/Requests/SyncOfflineDataRequest.php
1475: app/Http/Controllers/OfflineDataController.php
1476: routes/api.php
1477: tests/Feature/OfflineDataApiTest.php
1478: app/Policies/NoteCategoryPolicy.php
1479: app/Policies/NoteTagPolicy.php
1480: tests/Unit/NoteCategoryPolicyTest.php
1481: tests/Unit/NoteCategoryTest.php
1482: tests/Unit/NoteTagPolicyTest.php
1483: app_documentation/frontend_implementation_todo.md
1484: app/Services/NoteService.php
1485: database/migrations/2025_05_01_000000_create_routines_table.php
1486: app/Policies/RoutinePolicy.php
1487: app/Models/Routine.php
1488: app/Models/RoutineStep.php
1489: database/migrations/2025_05_01_000001_create_routine_steps_table.php
1490: database/factories/RoutineStepFactory.php
1491: tests/Unit/RoutineTest.php
1492: tests/Unit/RoutinePolicyTest.php
1493: tests/Unit/RoutineStepTest.php
1494: database/factories/RoutineFactory.php
1495: tests/Feature/RoutineApiTest.php
1496: app/Http/Requests/StoreRoutineRequest.php
1497: app/Http/Requests/UpdateRoutineRequest.php
1498: app/Providers/AuthServiceProvider.php
1499: database/migrations/2025_05_01_100004_create_posts_table.php
1500: database/migrations/2025_05_01_100005_create_comments_table.php
1501: app/Policies/PostPolicy.php
1502: app/Models/Post.php
1503: app/Models/Comment.php
1504: app/Services/PostService.php
1505: app/Http/Requests/StorePostRequest.php
1506: app/Http/Controllers/PostController.php
1507: app/Http/Requests/StoreCommentRequest.php
1508: tests/Feature/Authentication/RegistrationTest.php
1509: app/Modules/Authentication/Http/Requests/RegisterRequest.php
1510: composer.json
1511: app/Providers/EventServiceProvider.php
1512: app/Providers/RouteServiceProvider.php
1513: app/Policies/NotePolicy.php
1514: database/migrations/2025_04_30_110629_add_is_public_to_notes_table.php
1515: app/Modules/NotesService/Models/Note.php
1516: app/Modules/NotesService/Services/NoteService.php
1517: database/migrations/2025_04_30_071413_create_user_reminders_table.php
1518: tests/Unit/UserReminderTest.php
1519: app/Modules/ProtocolEngine/Models/UserReminder.php
1520: tests/Feature/CheckExpiredSubscriptionsTest.php
1521: repomix.config.json
1522: app/Console/Commands/CheckExpiredSubscriptions.php
1523: tests/Unit/CheckExpiredSubscriptionsTest.php
1524: app/Modules/SubscriptionBilling/Http/Controllers/WebhookController.php
1525: config/services.php
1526: .env
1527: tests/Feature/SubscriptionBilling/WebhookTest.php
1528: app/Modules/SubscriptionBilling/Services/AppleSubscriptionService.php
1529: tests/Unit/SubscriptionBilling/AppleSubscriptionServiceTest.php
1530: phpunit.xml
1531: app/Events/SubscriptionExpired.php
1532: app/Modules/SubscriptionBilling/Models/Subscription.php
1533: tests/Unit/SubscriptionTest.php
1534: app/Modules/SubscriptionBilling/Services/SubscriptionService.php
1535: app/Events/SubscriptionSubscribed.php
1536: app/Events/SubscriptionRenewed.php
1537: tests/Feature/SubscriptionBilling/WebhookAppleTest.php
1538: tests/Unit/UserTest.php
1539: tests/Feature/Authentication/LoginTest.php
1540: tests/Feature/UserManagement/UserProfileTest.php
1541: app/Modules/Authentication/Http/Requests/LoginRequest.php
1542: tests/Feature/Authentication/PasswordResetTest.php
1543: tests/Feature/ApiTestCase.php
1544: 5/5/2025, 8:59:02 AM (Europe/Minsk, UTC+3:00)
1545: 108,876 / 1,048.576K tokens used (10%)
1546: ACT MODE
1547: </environment_details>
````

## File: app_documentation/route_refactor_todo.md
````markdown
 1: *Phase 2: Implement Route Loading in Module Providers**
 2: 
 3: *   `[x]` **Implement (Authentication Module):**
 4:     *   `[x]` Edit `Authentication/Providers/RouteServiceProvider.php`.
 5:     *   `[x]` Implement the `boot()` method.
 6:     *   `[x]` Inside `boot()`, use `Route::middleware('api')->prefix('v1/auth')->group(base_path('app/Modules/Authentication/routes/api.php'));` (Adjust prefix `v1/auth` if a different convention is desired, e.g., just `v1`).
 7: *   `[x]` **Implement (UserManagement Module):**
 8:     *   `[x]` Edit `UserManagement/Providers/RouteServiceProvider.php`.
 9:     *   `[x]` Implement `boot()`.
10:     *   `[x]` Inside `boot()`, use `Route::middleware('api')->prefix('v1/user')->group(base_path('app/Modules/UserManagement/routes/api.php'));` (Adjust prefix).
11: *   `[x]` **Implement (SubscriptionBilling Module):**
12:     *   `[x]` Edit `SubscriptionBilling/Providers/RouteServiceProvider.php`.
13:     *   `[x]` Implement `boot()`.
14:     *   `[x]` Inside `boot()`, use `Route::middleware('api')->prefix('v1/billing')->group(base_path('app/Modules/SubscriptionBilling/routes/api.php'));` (Adjust prefix, consider separate prefixes for `/plans`, `/user/subscription`, `/webhooks`). *Note: Webhook routes might need CSRF exemption applied here or in the route file.*
15: *   `[x]` **Implement (ContentManagement Module):**
16:     *   `[x]` Edit `ContentManagement/Providers/RouteServiceProvider.php`.
17:     *   `[x]` Implement `boot()`.
18:     *   `[x]` Inside `boot()`, use `Route::middleware('api')->prefix('v1')->group(base_path('app/Modules/ContentManagement/routes/api.php'));` (Using just `/v1` as routes likely are `/protocols`, `/episodes`).
19: *   `[x]` **Implement (NotesService Module):**
20:     *   `[x]` Edit `NotesService/Providers/RouteServiceProvider.php`.
21:     *   `[x]` Implement `boot()`.
22:     *   `[x]` Inside `boot()`, use `Route::middleware('api')->prefix('v1/notes')->group(base_path('app/Modules/NotesService/routes/api.php'));` (Adjust prefix).
23: *   `[x]` **Implement (ProtocolEngine Module):**
24:     *   `[x]` Edit `ProtocolEngine/Providers/RouteServiceProvider.php`.
25:     *   `[x]` Implement `boot()`.
26:     *   `[x]` Inside `boot()`, use `Route::middleware('api')->prefix('v1/engine')->group(base_path('app/Modules/ProtocolEngine/routes/api.php'));` (Adjust prefix, e.g., `/reminders`, `/tracking`).
27: 
28: Okay, here is a detailed TODO checklist for refactoring the route registration to use Service Providers, based on the steps provided:
29: 
30: **Refactor Route Registration to Use Service Providers**
31: 
32: **Goal:** Replace dynamic route loading in `routes/api.php` with Module Service Providers for improved structure and compatibility with Laravel route caching.
33: 
34: ---
35: **Phase 3: Register Module Service Providers**
36: 
37: *   `[x]` Edit the main application providers file: `bootstrap/providers.php`.
38: *   `[x]` Add the fully qualified class name for each created module RouteServiceProvider to the `return [...]` array. Example:
39:     ```php
40:     return [
41:         App\Providers\AppServiceProvider::class,
42:         App\Modules\Authentication\Providers\RouteServiceProvider::class,
43:         App\Modules\UserManagement\Providers\RouteServiceProvider::class,
44:         App\Modules\SubscriptionBilling\Providers\RouteServiceProvider::class,
45:         App\Modules\ContentManagement\Providers\RouteServiceProvider::class,
46:         App\Modules\NotesService\Providers\RouteServiceProvider::class,
47:         App\Modules\ProtocolEngine\Providers\RouteServiceProvider::class,
48:         // ... add other module providers here
49:     ];
50:     ```
51: 
52: ---
53: 
54: **Phase 4: Clean Up Main Route File**
55: 
56: *   `[x]` Edit the main API routes file: `routes/api.php`.
57: *   `[x]` Delete the `glob(...)` loop and the `require $routeFilePath;` line within it.
58: *   `[x]` Remove the `Route::prefix('v1')->group(...)` wrapper *unless* you decided module providers should *not* handle the `v1` prefix themselves. (Based on Phase 2, the wrapper can likely be removed).
59: *   `[x]` Keep the default `Route::middleware('auth:sanctum')->get('/user', ...);` route if still needed at the top level.
60: 
61: ---
62: 
63: **Phase 5: Verification**
64: 
65: *   `[ ]` **Clear Caches:** Run `php artisan route:clear` and `php artisan config:clear`.
66: *   `[ ]` **List Routes:** Run `php artisan route:list`. Verify that all routes from the modules (e.g., `POST v1/auth/register`, `GET v1/user/profile`, `GET v1/protocols`, etc.) are listed correctly with the expected prefixes and middleware (`api`).
67: *   `[ ]` **Test Caching:**
68:     *   `[ ]` Run `php artisan route:cache`. Ensure it completes without errors.
69:     *   `[ ]` Run `php artisan route:list` again. Verify the routes are still listed correctly from the cache.
70:     *   `[ ]` Run `php artisan route:clear` again to leave the cache clear for development/testing.
71: *   `[ ]` **Run Tests:** Execute the full test suite (`composer test` or `php artisan test`). Pay close attention to the `RegistrationTest` and any other API feature tests. They should now pass (assuming no other underlying issues).
72: 
73: ---
````

## File: app_documentation/security_plan.md
````markdown
  1: **Huberman App: Security Plan**
  2: 
  3: **1. Introduction**
  4: 
  5: Security is a critical aspect of the Huberman App, especially considering user data, authentication, and subscription payments. This document outlines the plan for integrating security practices throughout the development lifecycle, including threat modeling, defining specific technical controls, and planning for security testing. The goal is to build a secure and trustworthy application by proactively identifying and mitigating potential vulnerabilities.
  6: 
  7: **2. Detailed Threat Modeling**
  8: 
  9: *   **Process:**
 10:     *   A dedicated threat modeling session will be conducted early in the implementation phase, involving backend developers, potentially frontend developers, and project leads.
 11:     *   The **STRIDE methodology** (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) will be used as a framework.
 12:     *   The analysis will focus on key data flows and components based on the detailed technical design (`component_interfaces_interactions.md`, `complex_workflows.md`) and API contract (`api_design_documentation.md`), specifically targeting:
 13:         *   Authentication flow (Registration, Login, Password Reset, Token Handling)
 14:         *   Subscription lifecycle management (IAP, Webhooks, Status Updates)
 15:         *   Feature Gating logic (Free vs. Premium access)
 16:         *   User-generated content (Notes - storage, access control, potential public sharing)
 17:         *   API endpoints (Input validation, Authorization checks)
 18:         *   Data storage (Database, Cache)
 19:         *   Third-party integrations (Payment providers, Push notification services)
 20:     *   For each component/flow, potential threats based on STRIDE categories will be identified, documented, and ranked based on potential impact and likelihood.
 21: *   **Outcome:**
 22:     *   A documented Threat Model (e.g., in a separate document linked here, or appended).
 23:     *   This model will list identified threats, potential attack vectors, existing planned mitigations (from this document), and any additional required security controls or areas needing further investigation.
 24:     *   This document will serve as a living reference, revisited if major architectural changes occur.
 25: 
 26: **3. Specific Technical Security Controls**
 27: 
 28: Based on the architecture, known best practices, and anticipated threats, the following technical security controls will be implemented and verified:
 29: 
 30: **3.1. Authentication & Session Management**
 31: 
 32: *   **Mechanism:** Laravel Sanctum for API token authentication.
 33: *   **Token Strategy:**
 34:     *   Issue API tokens upon successful login/registration.
 35:     *   Tokens will have a configured expiration time (e.g., configurable, potentially hours or days for mobile usability, balancing security and UX). *Decision: Initially target [e.g., 7 days] expiry, review based on UX/security needs.*
 36:     *   Refresh tokens are *not* part of Sanctum's default API token flow; re-authentication will be required after token expiry. Consider Sanctum's SPA authentication if persistent sessions are strongly desired and feasible with React Native setup, but API tokens are simpler initially.
 37: *   **Password Policy:** Enforce minimum password complexity (e.g., length, character types) during registration and password reset using Laravel validation rules.
 38: *   **Brute-Force Protection:** Implement rate limiting on authentication endpoints (`/login`, `/register`, `/forgot-password`, `/reset-password`) using Laravel's built-in rate limiter or dedicated packages.
 39: *   **Secure Storage:** Passwords stored securely using Laravel's default hashing mechanism (Bcrypt).
 40: 
 41: **3.2. Authorization**
 42: 
 43: *   **Backend Enforcement:** All authorization decisions MUST be made on the backend (Laravel). No reliance on client-side (React Native) checks for controlling access to data or features.
 44: *   **Subscription Checks:** Use dedicated Middleware (e.g., `CheckPremiumAccess`) applied to API routes/groups requiring premium status. This middleware will leverage the `SubscriptionServiceInterface` to check for an active, valid premium subscription (status `active` or `trialing`, within `ends_at` date).
 45: *   **Ownership & Policies:** Use Laravel Policies (e.g., `NotePolicy`, `ReminderPolicy`) to ensure users can only access and modify their own resources (preventing Insecure Direct Object References - IDOR). Policies check `user_id` matches the authenticated user.
 46: *   **Principle of Least Privilege:** Ensure API endpoints only return data necessary for the specific function.
 47: 
 48: **3.3. Encryption**
 49: 
 50: *   **In Transit:** Enforce HTTPS (TLS 1.2+) for all communication between the React Native app and the Laravel API. Configure web server (via Forge/Vapor) for HTTPS only, potentially with HSTS headers.
 51: *   **At Rest:** Leverage database encryption-at-rest features provided by the managed PostgreSQL provider (e.g., AWS RDS, Google Cloud SQL). Confirm this is enabled during infrastructure setup.
 52: *   **Secrets Management:**
 53:     *   API keys, database credentials, payment provider secrets, and other sensitive configuration MUST NOT be hardcoded in the repository.
 54:     *   Use environment variables (`.env` file locally, secure environment variable injection via Forge/Vapor in deployed environments).
 55:     *   Consider using a dedicated secrets manager (like AWS Secrets Manager, Google Secret Manager, or HashiCorp Vault) for production keys if complexity warrants it later.
 56: 
 57: **3.4. Input Validation & Sanitization**
 58: 
 59: *   **Validation:** Use Laravel Form Requests for validating all incoming data from API requests (query parameters, request bodies). Define strict validation rules for data types, formats, lengths, presence, etc.
 60: *   **Output Encoding:** Use Blade's default encoding (`{{ }}`) if rendering any user content in web views (less likely for API). For API responses, ensure proper JSON encoding handles special characters. Avoid rendering user-provided content directly as HTML in the frontend without appropriate sanitization/encoding (React Native generally handles this well).
 61: *   **Sanitization:** While strict validation is key, sanitize input specifically intended for database queries where complex filtering might occur, although Eloquent/Query Builder typically provides protection against SQL injection.
 62: 
 63: **3.5. Payment Security**
 64: 
 65: *   **IAP Receipt Validation:** All Apple App Store and Google Play In-App Purchase receipts MUST be validated server-side by sending them from the Laravel backend to the respective provider's validation endpoints. Do not trust client-side validation results.
 66: *   **Webhook Security:** Securely handle incoming webhooks from payment providers (Stripe/Paddle/Apple/Google) by:
 67:     *   Verifying the request signature using the provider's secret key (configured via environment variables). Reject any requests with invalid signatures.
 68:     *   Processing events idempotently where possible (e.g., check if the subscription status is already updated before applying the change again).
 69: 
 70: **3.6. Dependency Management**
 71: 
 72: *   **Scanning:** Regularly scan for known vulnerabilities in dependencies:
 73:     *   Backend: Run `composer audit` locally and/or in the CI pipeline.
 74:     *   Frontend: Run `npm audit` locally and/or in the CI pipeline.
 75: *   **Updates:** Keep dependencies reasonably up-to-date, prioritizing security patches. Use tools like GitHub Dependabot to automate update pull requests.
 76: 
 77: **3.7. General Security**
 78: 
 79: *   **Security Headers:** Configure appropriate HTTP security headers (e.g., `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, potentially `Content-Security-Policy` if serving any web content) via web server or middleware.
 80: *   **Error Handling:** Configure Laravel error reporting to avoid exposing sensitive information (stack traces, database details) in production API responses. Return generic error messages for 5xx errors.
 81: *   **Logging:** Implement sufficient logging to track key security events (e.g., login attempts, password resets, subscription changes, significant errors), but avoid logging sensitive data like passwords or full payment details. Centralize logs for monitoring.
 82: 
 83: **4. Security Testing Planning**
 84: 
 85: Security testing will be integrated throughout the development lifecycle:
 86: 
 87: *   **Static Application Security Testing (SAST):**
 88:     *   **Tools:** Configure static analysis tools like PHPStan/Psalm with security-focused extensions (e.g., `psalm/plugin-security-analysis`) for the backend. Use ESLint with security plugins (e.g., `eslint-plugin-security`) for React Native frontend code.
 89:     *   **Integration:** Run SAST tools locally via Git hooks (optional) and mandatorily within the CI/CD pipeline on every commit/pull request to catch potential issues early.
 90: *   **Dynamic Application Security Testing (DAST):**
 91:     *   **Timing:** Periodically run DAST scans against the deployed application in the Staging environment.
 92:     *   **Tools:** Initially, consider using OWASP ZAP (Zed Attack Proxy) for basic automated scanning of common web vulnerabilities (e.g., XSS, SQLi - though less likely with framework defaults, still worth checking). Explore more advanced tools or services if budget allows later.
 93: *   **Manual Code Review:** Encourage security-focused code reviews as part of the standard pull request process, especially for critical areas like authentication, authorization, and payment handling.
 94: *   **Penetration Testing:**
 95:     *   **Timing:** Schedule external penetration testing by a reputable third-party vendor before the first major production launch and potentially before subsequent major feature releases or annually.
 96:     *   **Scope:** Define the scope to cover key application functionality, including authentication, subscription flows, premium feature access, notes handling, API endpoints, and infrastructure configuration.
 97:     *   **Budget:** Allocate budget and time for engaging penetration testing services and remediating identified findings.
 98: 
 99: **5. Incident Response (Basic Considerations)**
100: 
101: *   While a full incident response plan is beyond this scope, basic readiness includes:
102:     *   Having access to centralized logs.
103:     *   Defining communication channels for reporting and handling security incidents.
104:     *   Understanding how to quickly revoke compromised credentials or disable features if necessary.
105: 
106: **6. Conclusion**
107: 
108: This security plan provides a framework for building security into the Huberman App from the ground up. By implementing the defined technical controls, performing regular testing, and fostering a security-aware development culture, we aim to significantly reduce the risk of security vulnerabilities and protect user data and trust. This plan should be treated as a living document and updated as the application evolves.
````

## File: app_documentation/technology_versions_libraries.md
````markdown
 1: **Huberman App: Finalized Technology Versions & Key Libraries**
 2: 
 3: **1. Introduction**
 4: 
 5: This document specifies the finalized versions for the core technologies and selected key third-party libraries to be used in the Huberman App project. These choices aim to provide a stable, secure, and maintainable foundation for development, based on the architectural decisions (`architecture_pan.md`) and implementation plan (`detailed_plan.md`). This information will directly inform the `composer.json` (backend) and `package.json` (frontend) files and serve as a reference point for developers.
 6: 
 7: **2. Core Technology Versions**
 8: 
 9: *   **PHP:**
10:     *   **Version:** `8.2+`
11:     *   **Justification:** Provides modern language features and performance improvements. Required by Laravel 11.x. Aim for the latest stable 8.2.x or 8.3.x patch release available at project start.
12: *   **Laravel Framework:**
13:     *   **Version:** `11.x`
14:     *   **Justification:** Latest major stable release (as of Q1/Q2 2024), offering the longest support window and latest features. Ensures access to up-to-date ecosystem packages.
15: *   **Database:**
16:     *   **Version:** `PostgreSQL 17.x`
17:     *   **Justification:** Latest stable major release offering advanced features and performance. *Note: Verify compatibility and availability with the chosen managed database provider (e.g., AWS RDS, Google Cloud SQL) before final provisioning.* If the latest isn't available, fall back to the latest supported major version (e.g., 15.x).
18: *   **Cache / Queue Broker:**
19:     *   **Version:** `Redis 7.x`
20:     *   **Justification:** Current, high-performance, stable version widely supported for caching and queuing.
21: *   **Frontend Runtime:**
22:     *   **Version:** `Node.js 20.x (LTS)`
23:     *   **Justification:** Use the current Long-Term Support (LTS) version for stability and extended support, required for React Native tooling (Metro, CLI).
24: *   **Frontend Framework:**
25:     *   **Version:** `React Native (Latest Stable)`
26:     *   **Justification:** Use the latest stable release available at project kickoff to leverage the newest features, performance improvements, and security patches. Version number to be confirmed at initialization (e.g., `0.73.x` or newer).
27: 
28: **3. Key Libraries Selection**
29: 
30: **3.1. Backend (Laravel - `composer.json`)**
31: 
32: *   **Payment Processing:**
33:     *   **Library:** `laravel/cashier-stripe`
34:     *   **Version:** `^15.0` (or version compatible with Laravel 11.x)
35:     *   **Justification:** Official Laravel package providing a fluent interface for Stripe's subscription billing services, simplifying integration. *Chosen over Paddle for this document, assuming Stripe preference/fit.*
36: *   **API Authentication:**
37:     *   **Library:** `laravel/sanctum`
38:     *   **Version:** Bundled with Laravel 11.x (or latest compatible)
39:     *   **Justification:** Official lightweight system for API token authentication, suitable for mobile apps and SPAs. Preferred over Passport for this use case unless OAuth server features are explicitly needed.
40: 
41: **3.2. Frontend (React Native - `package.json`)**
42: 
43: *   **In-App Purchases:**
44:     *   **Library:** `react-native-iap`
45:     *   **Version:** `Latest Stable`
46:     *   **Justification:** De facto standard community library for handling In-App Purchases across both iOS and Android platforms. Requires careful platform-specific setup.
47: *   **Push Notifications:**
48:     *   **Library:** `@react-native-firebase/app` & `@react-native-firebase/messaging`
49:     *   **Version:** `Latest Stable`
50:     *   **Justification:** Official Firebase modules for React Native. Provides a robust, cross-platform solution for handling push notifications via Firebase Cloud Messaging (FCM), which handles delivery to both APNS (iOS) and Android. Assumes Firebase project setup.
51: *   **State Management:**
52:     *   **Library:** `zustand`
53:     *   **Version:** `Latest Stable`
54:     *   **Justification:** A small, fast, and scalable state-management solution using simplified flux principles. Chosen for its simplicity and minimal boilerplate compared to Redux, potentially suitable for the app's expected state complexity.
55: *   **Navigation:**
56:     *   **Library:** `react-navigation` (`@react-navigation/native`, `@react-navigation/native-stack`, etc.)
57:     *   **Version:** `Latest Stable`
58:     *   **Justification:** The standard and most widely used library for handling navigation and screen transitions in React Native applications.
59: 
60: **4. Documentation and Updates**
61: 
62: *   The exact versions used will be locked in the respective `composer.lock` and `package-lock.json` files.
63: *   The primary `composer.json` and `package.json` files will reflect the target version constraints (e.g., `^11.0` for Laravel).
64: *   This document (`technology_versions_libraries.md`) serves as the initial decision record. It can be formalized into an Architecture Decision Record (ADR) if desired.
65: *   The project's main `README.md` should ideally include a summary of the core technology stack and versions for quick reference.
66: *   Dependency versions should be periodically reviewed and updated (e.g., using `composer update`, `npm update`, `Dependabot`) following appropriate testing procedures to incorporate security patches and improvements.
67: 
68: **5. Conclusion**
69: 
70: These technology and library choices provide a modern, robust, and well-supported stack for the Huberman App. Finalizing these versions allows the development team to proceed with project setup and initial implementation with clarity and consistency.
````

## File: app_documentation/testing_strategy.md
````markdown
  1: **Huberman App: Holistic Testing Strategy**
  2: 
  3: **1. Introduction**
  4: 
  5: This document outlines the comprehensive testing strategy for the Huberman App project, encompassing both the backend (Laravel) and frontend (React Native) components. The primary goal is to ensure the delivery of a high-quality, reliable, secure, and user-friendly application that meets all functional and non-functional requirements. This strategy adopts a multi-layered approach, integrating various testing types throughout the development lifecycle.
  6: 
  7: **2. Testing Objectives**
  8: 
  9: *   **Verify Requirements:** Ensure the application functions according to the defined user stories and acceptance criteria (`user_stories_mvp.md`).
 10: *   **Prevent Regressions:** Detect defects introduced by new code changes or refactoring early in the cycle.
 11: *   **Build Confidence:** Provide confidence to the team, stakeholders, and users in the application's stability and correctness before release.
 12: *   **Early Defect Detection:** Identify and fix bugs as early as possible in the development process, reducing the cost and effort of remediation.
 13: *   **Ensure Quality Attributes:** Validate non-functional requirements, including performance, security, and usability.
 14: 
 15: **3. Testing Levels & Scope**
 16: 
 17: We will employ a balanced mix of automated and manual testing across different levels:
 18: 
 19: *   **Level 1: Unit Tests**
 20:     *   **Scope:** Focus on testing the smallest isolated parts of the codebase (individual functions, methods, classes, components, hooks, utils). Dependencies are typically mocked or stubbed.
 21:     *   **Backend (Laravel):** Test model logic, service class methods, form request validation rules, utility functions. Follows TDD principles outlined in `backend_implementation_todo.md`.
 22:     *   **Frontend (React Native):** Test individual UI components' rendering and basic interactions, utility functions, state management logic (store actions/reducers/selectors), custom hooks.
 23:     *   **Goal:** Verify the correctness of individual code units, fast feedback for developers.
 24:     *   **Execution:** Run locally by developers during development, automatically in the CI pipeline on every commit/PR.
 25: 
 26: *   **Level 2: Integration Tests (Backend)**
 27:     *   **Scope:** Verify the interaction and communication between multiple backend modules or components (e.g., Controller -> Service -> Repository/Model, Event -> Listener). May involve interaction with a test database and cache.
 28:     *   **Goal:** Ensure different parts of the backend work together as expected.
 29:     *   **Execution:** Run locally by developers, automatically in the CI pipeline.
 30: 
 31: *   **Level 3: Component Tests (Frontend)**
 32:     *   **Scope:** Test React Native components with more complex interactions, including state changes, prop handling, and basic rendering within a simulated environment, but without full navigation or backend APIs.
 33:     *   **Goal:** Verify component behavior and integration with state management or child components.
 34:     *   **Execution:** Run locally by developers, automatically in the CI pipeline.
 35: 
 36: *   **Level 4: API / Contract Tests (Backend)**
 37:     *   **Scope:** Test the backend API endpoints directly, verifying adherence to the defined contract (`openapi.yaml`). Check request validation, authentication/authorization logic, response structure, status codes, and basic business logic execution.
 38:     *   **Goal:** Ensure the API behaves as expected from an external consumer's perspective (the frontend) and prevent breaking changes.
 39:     *   **Execution:** Run locally by developers (Laravel Feature Tests), automatically in the CI pipeline.
 40: 
 41: *   **Level 5: End-to-End (E2E) Tests**
 42:     *   **Scope:** Simulate real user scenarios by interacting with the complete, deployed application (React Native app interacting with the backend API in a dedicated test/staging environment).
 43:     *   **Goal:** Validate complete user flows from start to finish across the entire stack.
 44:     *   **Execution:** Run primarily in Staging environment. Due to complexity, initial focus might be on automating critical paths (e.g., login, core free feature, subscription purchase, core premium feature access). May run nightly or on-demand rather than every commit. Can be supplemented heavily by manual testing initially.
 45: 
 46: *   **Level 6: Manual Exploratory & Acceptance Testing**
 47:     *   **Scope:** Human-driven testing involving unscripted exploration of the application to uncover usability issues, edge cases, and unexpected behavior. Also includes scripted testing based on user story acceptance criteria.
 48:     *   **Goal:** Catch issues missed by automated tests, validate the user experience, confirm requirements are met from a user perspective. Includes Design QA (comparing implementation to Figma designs).
 49:     *   **Execution:** Performed primarily on Staging builds by QA, Product Owners, and Designers.
 50: 
 51: *   **Level 7: Security Testing**
 52:     *   **Scope:** As defined in `security_plan.md`. Includes SAST, DAST, and planned external Penetration Testing.
 53:     *   **Goal:** Identify and mitigate security vulnerabilities.
 54:     *   **Execution:** SAST in CI pipeline. DAST periodically on Staging. Penetration testing before major releases.
 55: 
 56: *   **Level 8: Performance Testing**
 57:     *   **Scope:** Assess backend API response times under simulated load, frontend app startup time, screen transition performance, memory usage.
 58:     *   **Goal:** Ensure the application meets performance expectations and scales appropriately.
 59:     *   **Execution:** Primarily post-MVP or before major releases on a Staging environment resembling production. Initial checks via developer tools during development.
 60: 
 61: *   **Level 9: Usability Testing**
 62:     *   **Scope:** Observing representative users interacting with the application to perform specific tasks.
 63:     *   **Goal:** Identify usability friction points and gather qualitative feedback on the user experience.
 64:     *   **Execution:** Planned sessions coordinated by UX designers/researchers, likely conducted periodically during development and before major launches.
 65: 
 66: **4. Tools & Technologies**
 67: 
 68: *   **Backend Unit/Integration/API:** PHPUnit
 69: *   **Frontend Unit/Component:** Jest, React Native Testing Library (RNTL)
 70: *   **Frontend E2E:** Detox / Appium / Maestro (Selection TBD based on team expertise/needs)
 71: *   **SAST:** PHPStan/Psalm (Backend), ESLint + Security Plugins (Frontend)
 72: *   **DAST:** OWASP ZAP (Initial), potentially commercial scanners later.
 73: *   **Performance:** k6/JMeter (Backend Load), React Native Perf Monitor/Flipper (Frontend Profiling)
 74: *   **Manual Testing/Management:** Jira/Trello (Test Cases/Bug Tracking), potentially TestRail/Zephyr
 75: *   **Device Testing:** BrowserStack / Sauce Labs (or physical device pool)
 76: 
 77: **5. Roles & Responsibilities**
 78: 
 79: *   **Developers (Backend & Frontend):**
 80:     *   Write and maintain Unit, Integration, and Component tests for their code.
 81:     *   Write API/Contract tests (Backend).
 82:     *   Run tests locally before committing code.
 83:     *   Fix bugs identified during testing.
 84:     *   Participate in code reviews focusing on testability and coverage.
 85:     *   Integrate and run SAST tools.
 86:     *   Contribute to E2E test automation (optional/based on skill).
 87:     *   Conduct initial performance profiling.
 88: *   **QA Engineers / SDETs (if applicable):**
 89:     *   Develop and execute manual test plans and exploratory testing.
 90:     *   Develop and maintain automated E2E tests.
 91:     *   Perform regression testing.
 92:     *   Manage bug tracking process.
 93:     *   Execute DAST scans.
 94:     *   Coordinate acceptance testing.
 95: *   **Designers:**
 96:     *   Perform Design QA against implemented features.
 97:     *   Conduct usability testing.
 98: *   **Product Owners / Managers:**
 99:     *   Define acceptance criteria for user stories.
100:     *   Participate in acceptance testing.
101:     *   Prioritize bug fixes.
102: *   **DevOps / Infrastructure:**
103:     *   Maintain testing environments.
104:     *   Integrate tests into CI/CD pipeline.
105:     *   Configure monitoring for performance and errors.
106: 
107: **6. Testing Environments**
108: 
109: *   **Local:** Developers run Unit, Integration, Component, API tests during coding.
110: *   **CI (Continuous Integration):** Automated execution of Unit, Integration, Component, API tests, and SAST checks upon code commits/PRs. Build failures block merges.
111: *   **Staging:** Deployed environment closely resembling production. Used for Manual QA, Acceptance Testing, E2E automation runs, DAST scans, Performance testing.
112: *   **Production:** Live environment. Testing is limited to essential post-deployment smoke tests and ongoing monitoring.
113: 
114: **7. Integration with Development Process**
115: 
116: *   **CI/CD Pipeline:** Automated tests (Levels 1-4) are mandatory gates in the CI pipeline. A failing build prevents code merging. E2E tests may run separately (e.g., nightly).
117: *   **Definition of Done (DoD):** A user story or task is considered "Done" only when:
118:     *   Code is implemented according to requirements.
119:     *   Relevant unit, integration, component, and API tests are written and passing.
120:     *   Code passes CI checks (including SAST).
121:     *   Code is peer-reviewed.
122:     *   Functionality is successfully tested by QA (manual/automated E2E) in Staging.
123:     *   Design QA is completed (if applicable).
124:     *   Acceptance criteria are met (verified by PO).
125:     *   Documentation (code comments, relevant diagrams, READMEs) is updated.
126: 
127: **8. Bug Tracking & Reporting**
128: 
129: *   **Tool:** Jira/Trello will be used for tracking bugs identified during any testing phase.
130: *   **Process:** Bugs will be reported with clear steps to reproduce, expected vs. actual results, severity/priority, environment details, and relevant screenshots/logs. Bugs will be assigned, prioritized, fixed, and then verified by QA in the Staging environment before closure.
131: 
132: **9. Conclusion**
133: 
134: This holistic testing strategy provides a framework for ensuring the quality and reliability of the Huberman App. By combining automated tests at various levels with thorough manual testing, security checks, and performance considerations, integrated tightly with the CI/CD pipeline and Definition of Done, we aim to deliver a robust and user-trusted application. This strategy will be reviewed and adapted as the project progresses.
````

## File: app_documentation/TODO.md
````markdown
  1: Okay, let's translate the high-level vision for the "Huberman App" (Optimize Guide) into a detailed technical plan and setup outline for the implementation phase.
  2: 
  3: ---
  4: 
  5: **Huberman App (Optimize Guide): Implementation Preparation Plan**
  6: 
  7: **1. Transition Summary**
  8: 
  9: We have successfully completed the high-level application description and architectural blueprint phases for the Huberman App. The architecture outlines a Modular Monolith (Laravel/PHP backend), a React Native frontend, PostgreSQL database, Redis caching/queuing, and a RESTful API, all designed to support the defined Freemium subscription model. This document details the next crucial phase: transitioning from the architectural vision to actionable technical specifications, project setup, and environment preparation necessary to initiate development efficiently and effectively. The objective is to establish a solid foundation for the implementation lifecycle.
 10: 
 11: **2. Detailed Technical Design & Specifications**
 12: 
 13: This phase focuses on refining the high-level architecture into granular component designs and technical specifications.
 14: 
 15: *   **Component Breakdown (Modular Monolith):**
 16:     *   **Process:** Decompose the Laravel backend into logical, domain-driven modules (Namespaces/Folders). Based on the architecture and features, initial modules will likely include: `Authentication`, `UserManagement`, `SubscriptionBilling` (integrating with chosen payment provider/Cashier), `ContentManagement` (Episodes, Protocols, Summaries), `ProtocolEngine` (Reminder logic, Tracking), `NotesService`, `CommunityFeatures` (if applicable early), and `CoreApi`.
 17:     *   **Outcome:** Clearly defined code boundaries and responsibilities within the Laravel application structure.
 18: *   **Component Interfaces & Interactions:**
 19:     *   **Process:** Define the specific internal contracts (Service Classes, Interfaces, Events) for how these backend modules interact. Document the flow of data and control, especially for cross-cutting concerns like subscription status checks. For frontend-backend interaction, focus on the API.
 20:     *   **Outcome:** Documented internal interaction patterns (e.g., Sequence Diagrams for key flows) and clear responsibilities for each module.
 21: *   **API Design & Documentation:**
 22:     *   **Process:** Formalize the RESTful API contract. Utilize OpenAPI (Swagger) specification to define all endpoints, request/response schemas, authentication methods (Laravel Sanctum/Passport), and authorization requirements. Explicitly tag endpoints requiring 'Premium' subscription status. Key areas include: Auth (login, register, password reset), User Profile, Plans/Subscriptions (fetching offers, potentially linking to provider portals), Content (fetching episodes, protocols, summaries - with filtering for free/premium), Notes (CRUD, public/private flags), Reminders (CRUD for premium), Tracking (logging adherence for premium). Define error handling standards (HTTP status codes, error response structure). Define webhook endpoints for payment providers (Stripe/Paddle, Apple App Store Server Notifications, Google Play Developer API).
 23:     *   **Outcome:** A version-controlled `openapi.yaml` or `swagger.json` file serving as the definitive API contract for both frontend and backend teams.
 24: *   **Database Schema Refinement:**
 25:     *   **Process:** Review the provided `database_plan.md` SQL schema. Convert it into Laravel Migrations. Finalize data types, constraints (NOT NULL, UNIQUE), foreign key relationships (with appropriate ON DELETE behavior - e.g., CASCADE for notes on user delete, RESTRICT for plans on active subscriptions). Define necessary indexes based on anticipated query patterns (e.g., indexing `subscriptions.user_id`, `subscriptions.status`, `subscriptions.ends_at`, `notes.user_id`, `notes.episode_id`, `protocols.category`). Plan for potential future schema evolution using migrations.
 26:     *   **Outcome:** A complete set of executable Laravel migration files checked into version control, representing the definitive database structure.
 27: *   **Complex Workflow/Algorithm Design:**
 28:     *   **Process:** Document the specific logic for complex features identified in the architecture:
 29:         *   **Subscription Lifecycle Management:** Detail the state machine for subscriptions (`trialing`, `active`, `past_due`, `canceled`, `expired`) and how webhook events from Stripe/Paddle/Apple/Google trigger state transitions and update the `subscriptions` table.
 30:         *   **Feature Gating Logic:** Specify the implementation details for Laravel Middleware/Policies that check the user's active subscription status (querying `subscriptions` table, potentially using cached flags from Redis) before granting access to premium API routes or features.
 31:         *   **Customizable Reminders (Premium):** Design the scheduling mechanism (likely using Laravel's Task Scheduling + Queues) to trigger push notifications based on user-defined times/frequencies for specific protocols.
 32:         *   **Tracking & Visualization Logic (Premium):** Define how adherence data is stored and how it will be aggregated for progress visualizations (e.g., streak calculation).
 33:     *   **Outcome:** Sequence diagrams, state diagrams, or pseudo-code documenting the core logic for these critical flows.
 34: *   **Technology Version & Library Finalization:**
 35:     *   **Process:** Lock down specific versions: PHP (e.g., 8.2+), Laravel (e.g., 10.x/11.x), PostgreSQL (e.g., 17), Redis (e.g., 7.x), Node.js (LTS for React Native tooling), React Native (latest stable). Select and document key libraries: `laravel/cashier-stripe` or `laravel/cashier-paddle`, `react-native-iap`, Push Notification library (e.g., `react-native-push-notification` or cloud provider SDKs), state management for RN (e.g., Redux Toolkit, Zustand).
 36:     *   **Outcome:** Updated `composer.json`, `package.json`, and potentially a project README or Architecture Decision Record (ADR) listing finalized versions and libraries.
 37: 
 38: **3. Project Planning & Development Readiness**
 39: 
 40: Translate the technical design into a manageable project plan and prepare the team.
 41: 
 42: *   **Requirements Refinement (User Stories):**
 43:     *   **Process:** Break down the features from `app_description.md` (both Free and Premium tiers) into granular User Stories (e.g., "As a Free User, I want to see summaries for foundational protocols so that I can understand the basics," "As a Premium User, I want to set a custom daily reminder for 'Morning Sunlight Viewing' so that I don't forget," "As a Premium User, I want to mark a protocol as completed for the day so that I can track my adherence"). Use a tool like Jira or Trello. Prioritize stories for an MVP, focusing on core free functionality and the subscription mechanism first, followed by premium features.
 44:     *   **Outcome:** A populated backlog of estimated User Stories in the chosen project management tool.
 45: *   **Detailed Estimation:**
 46:     *   **Process:** Estimate the effort for each User Story based on the detailed technical designs (e.g., using Story Points or time estimates). This should be done collaboratively by the development team.
 47:     *   **Outcome:** Estimated backlog providing a basis for timeline creation.
 48: *   **Granular Project Timeline & Milestones:**
 49:     *   **Process:** Develop a sprint-based or Kanban-based timeline. Define key milestones:
 50:         *   M1: Project Setup Complete (Repo, CI/CD Base, Local Env).
 51:         *   M2: Core Backend Ready (Auth, User Mgmt, DB Migrations, Basic API Shell).
 52:         *   M3: Basic Content Display (Free Tier Protocols/Summaries visible in RN App).
 53:         *   M4: Subscription Flow PoC (IAP Integration, Backend Webhooks, Basic Feature Gate).
 54:         *   M5: Free Tier Feature Complete (Basic Reminders, Notes).
 55:         *   M6: Premium Feature Set 1 (e.g., Full Content Access, Custom Reminders).
 56:         *   M7: Premium Feature Set 2 (e.g., Tracking, Offline Access).
 57:         *   M8: Beta Release / Production Readiness.
 58:     *   **Outcome:** A documented project plan with sprints/phases, milestones, and dependencies visualized.
 59: *   **Resource Allocation:**
 60:     *   **Process:** Assign development team members (Backend Devs, Frontend RN Devs, QA, potentially DevOps support) to specific modules, epics, or sprints based on skills and availability.
 61:     *   **Outcome:** Clear ownership of tasks/modules within the team.
 62: *   **Essential Tooling Setup:**
 63:     *   **Process:** Configure and grant access to necessary tools:
 64:         *   Project Management: Jira/Trello board setup.
 65:         *   Version Control: GitHub/GitLab/Bitbucket repository creation, branch strategy definition (e.g., Gitflow).
 66:         *   Communication: Slack/Teams channel setup.
 67:         *   Documentation: Confluence/Notion space creation for technical docs, ADRs, meeting notes.
 68:     *   **Outcome:** Operational project infrastructure ready for team use.
 69: *   **Development Environment Configuration:**
 70:     *   **Process:** Finalize and distribute the Docker configuration (`docker-compose.yml`) as specified in the architecture. Ensure it includes containers for PHP-FPM, Nginx/Caddy, PostgreSQL, Redis, and Node.js (for frontend tooling). Provide clear instructions for setup and usage. Standardize environment variable management (e.g., `.env` files with templates).
 71:     *   **Outcome:** Developers can quickly and consistently set up identical local development environments.
 72: 
 73: **4. UI/UX Design Integration (If Applicable)**
 74: 
 75: If not already completed, this is a critical parallel activity, especially for the React Native frontend.
 76: 
 77: *   **Process:** Ensure finalized, high-fidelity mockups and prototypes are available and signed off. These must cover:
 78:     *   All key user flows (onboarding, browsing content, setting reminders, taking notes, tracking progress).
 79:     *   Clear visual differentiation between Free and Premium features/content.
 80:     *   User-friendly prompts and flows for upgrading to Premium.
 81:     *   Platform-specific design conventions (iOS/Android).
 82:     *   Creation of a component library/design system for consistency.
 83: *   **Outcome:** Signed-off UI/UX designs and a style guide/component library ready for frontend development.
 84: 
 85: **5. Infrastructure & Environment Setup**
 86: 
 87: Prepare the cloud/hosting environments required beyond local development.
 88: 
 89: *   **Infrastructure Planning:**
 90:     *   **Process:** Based on the Laravel Forge/Vapor choice, plan the specific server sizes/configurations (if using Forge) or review Vapor's serverless scaling model. Estimate initial database (PostgreSQL) and cache (Redis) resource needs (using managed services). Plan for object storage (S3/GCS) for potential offline content or user uploads.
 91:     *   **Outcome:** Documented infrastructure requirements and initial sizing estimates.
 92: *   **Cloud Service Selection:**
 93:     *   **Process:** Confirm choices: Forge/Vapor for hosting, AWS RDS/Managed Postgres provider, AWS ElastiCache/Managed Redis provider, S3/GCS for storage. Set up accounts if necessary.
 94:     *   **Outcome:** Finalized list of cloud services and providers.
 95: *   **Environment Provisioning:**
 96:     *   **Process:** Use Forge/Vapor (or Terraform/Pulumi if more control is desired) to provision the initial Dev, Staging, and Production environments. This includes setting up servers/services, databases, caches, and configuring network access/security groups.
 97:     *   **Outcome:** Functional cloud environments ready for deployment.
 98: *   **Monitoring, Logging, Alerting Setup:**
 99:     *   **Process:** Integrate monitoring tools (e.g., Datadog, Sentry, CloudWatch, Prometheus/Grafana) into the provisioned environments. Configure basic logging aggregation (e.g., Vapor logs, CloudWatch Logs, ELK stack). Set up initial alerts for critical events (e.g., high error rates, server down, high DB connections). Integrate Laravel Telescope for Dev/Staging.
100:     *   **Outcome:** Foundational observability infrastructure in place.
101: *   **Backup & Recovery Planning:**
102:     *   **Process:** Configure automated database backups (e.g., using RDS snapshots or provider tools) with defined retention policies. Document the recovery procedure (e.g., restoring from a snapshot).
103:     *   **Outcome:** Initial backup strategy implemented and documented.
104: 
105: **6. Security Deep Dive & Planning**
106: 
107: Integrate security rigorously from the start.
108: 
109: *   **Detailed Threat Modeling:**
110:     *   **Process:** Conduct a threat modeling session (e.g., using STRIDE) based on the detailed technical design, data flows, and features (especially authentication, subscription handling, user notes, potential community features). Identify potential threats and vulnerabilities.
111:     *   **Outcome:** A documented threat model identifying key risks and potential attack vectors.
112: *   **Define Specific Technical Security Controls:**
113:     *   **Process:** Based on the threat model and architecture, define concrete security controls:
114:         *   **Authentication:** Specify token expiry, refresh token strategy, password complexity rules, brute-force protection (rate limiting).
115:         *   **Authorization:** Detail the implementation of Laravel Policies/Middleware for checking `subscriptions.status` for premium features. Ensure no business logic relies solely on client-side checks.
116:         *   **Encryption:** Enforce TLS 1.2+ (HTTPS), confirm database encryption at rest, define secure storage for API keys/secrets (e.g., environment variables injected via Forge/Vapor, potentially a secrets manager).
117:         *   **Input Validation:** Define strategy (e.g., Laravel Form Requests) for validating all incoming API request data.
118:         *   **Payment Security:** Reiterate server-side validation of IAP receipts and secure webhook handling (signature verification).
119:         *   **Dependency Scanning:** Plan for tools like `composer audit`, `npm audit`.
120:     *   **Outcome:** A checklist or document detailing specific security controls to be implemented and verified.
121: *   **Security Testing Planning:**
122:     *   **Process:** Plan for integrating security testing into the development lifecycle:
123:         *   **SAST:** Configure static analysis tools (e.g., PHPStan, Psalm, ESLint security plugins) to run locally and/or in CI.
124:         *   **DAST:** Plan for using basic dynamic analysis tools against the Staging environment later in the cycle.
125:         *   **Penetration Testing:** Allocate budget/time for external penetration testing before major production launches.
126:     *   **Outcome:** Security testing activities integrated into the project plan and CI/CD strategy.
127: 
128: **7. CI/CD Pipeline Foundation**
129: 
130: Automate the build, test, and deployment process early.
131: 
132: *   **Process:** Set up the initial CI/CD pipeline (using GitHub Actions, GitLab CI, Bitbucket Pipelines, or Jenkins) connected to the version control repository. Configure initial stages:
133:     *   Trigger on push/merge to `develop` and `main` branches.
134:     *   Checkout code.
135:     *   Install dependencies (`composer install`, `npm install`).
136:     *   Run linters and static analysis (SAST tools).
137:     *   Run automated tests (Unit, Integration - e.g., `php artisan test`, `npm test`).
138:     *   Build frontend assets (`npm run build`).
139:     *   (Initial) Deploy script targeting the Dev/Staging environment using Forge CLI/API or Vapor CLI deployment commands.
140: *   **Outcome:** A basic, functional CI/CD pipeline that automates testing and deployment to lower environments, ready to be expanded as the project progresses.
141: 
142: **8. Initiation of Development**
143: 
144: With the detailed plans and setup complete, development can commence.
145: 
146: *   **Process:** The development team begins implementation based on the prioritized backlog (User Stories), detailed technical designs, API specifications, and established environment/tooling setup.
147: *   **Initial Focus:**
148:     *   Setting up the base Laravel and React Native project structures.
149:     *   Implementing core database migrations (Users, Plans, Subscriptions, initial Content tables).
150:     *   Building the Authentication flow (backend API and frontend screens).
151:     *   Establishing basic API communication between frontend and backend.
152:     *   Setting up the basic subscription scaffolding (e.g., integrating Laravel Cashier, defining Plan models).
153: *   **Outcome:** Development kickoff, focusing on foundational components and demonstrating core connectivity.
154: 
155: ---
156: 
157: This comprehensive plan provides the necessary detail and structure to effectively transition the Huberman App project from architecture into the implementation phase, ensuring all critical technical, planning, infrastructure, and security aspects are addressed upfront.
````

## File: app_documentation/ui_ux_handoff_integration.md
````markdown
 1: **Huberman App: UI/UX Design Handoff & Integration Plan**
 2: 
 3: **1. Introduction**
 4: 
 5: This document outlines the standardized process for handing off finalized User Interface (UI) and User Experience (UX) designs from the design team to the frontend (React Native) development team for the Huberman App. The goal is to ensure a smooth, efficient, and accurate translation of the design vision into a functional application, maintaining fidelity with the intended **Microsoft Fluent UI** aesthetic.
 6: 
 7: **2. Guiding Principles**
 8: 
 9: *   **Collaboration:** Open communication between design and development is essential throughout the process.
10: *   **Clarity:** Handoff materials must be clear, unambiguous, and provide all necessary details for implementation.
11: *   **Consistency:** Designs should adhere to a consistent design system and component library approach.
12: *   **Efficiency:** Utilize standard tools and processes to minimize friction and rework.
13: 
14: **3. Target Aesthetic: Microsoft Fluent UI**
15: 
16: The application aims for a look and feel inspired by Microsoft's Fluent Design System. This influences the handoff in several ways:
17: 
18: *   **Design References:** Designers should utilize official Fluent Design System documentation (web guidelines, potentially WinUI/MAUI examples for principles) as a primary reference, adapting concepts appropriately for a mobile React Native context.
19: *   **Component Library Strategy (Key Decision Needed):**
20:     *   **Option A (Recommended if mature):** Leverage an existing Fluent UI library for React Native (e.g., `fluentui-react-native` provided by Microsoft). Designers should align their components with those available in the chosen library where possible. The handoff must clearly indicate which standard library components are used and specify any required customizations (theming, styling overrides).
21:     *   **Option B (Custom Build):** If a suitable library isn't available or doesn't meet needs, developers will build custom components based strictly on Fluent guidelines and the provided Figma specifications. This requires more development effort and very precise specifications from the designer.
22:     *   **Decision:** The specific library (or decision to build custom) needs to be finalized collaboratively between design and frontend development leads early on. This document assumes a library *might* be used, requiring designers to reference it.
23: *   **Figma Toolkit:** Designers are encouraged to use a Fluent UI Design Kit for Figma (if available and suitable) to maintain consistency and speed up the design process.
24: 
25: **4. Key Tools**
26: 
27: *   **Design & Prototyping:** **Figma** will be the primary tool for creating designs, prototypes, specifications, and exporting assets.
28: *   **Component Documentation (Developer Built):** **Storybook** will be used by frontend developers to build and document the reusable React Native components interactively, based on Figma specs. Designers will reference Storybook during Design QA.
29: *   **Communication:** **Slack/Teams** (specify channel) for asynchronous communication and quick questions. Regular sync meetings as needed.
30: *   **Project Management:** **Jira/Trello** (specify board/project) for tracking UI implementation user stories/tasks derived from the designs.
31: 
32: **5. Handoff Process**
33: 
34: 1.  **Design Finalization & Review:**
35:     *   Designer completes user flows, screen designs, and component definitions in Figma for a specific feature or set of features.
36:     *   Internal design review is conducted.
37:     *   Designs are reviewed with Product Management/Stakeholders for functional sign-off.
38: 
39: 2.  **Preparation in Figma:**
40:     *   **Organization:** Figma file is well-organized with clear page structures (e.g., by flow, by feature) and layer naming conventions.
41:     *   **Components:** Reusable elements (buttons, inputs, cards, list items, navigation bars etc.) are created as Figma Components with variants defined (e.g., states like disabled, different sizes) aligned with Fluent principles and the chosen library strategy (see Sec 3).
42:     *   **Styles:** Colors, typography (font families - specify font files if custom, sizes, weights), spacing values, and grids/layouts are defined as Figma Styles.
43:     *   **Specs:** Auto-layout and constraints are used effectively to ensure responsive behavior and clear spacing/padding intent. Measurements, colors, and typography details should be easily inspectable using Figma's built-in "Inspect" panel.
44:     *   **Assets:** All icons, illustrations, or images needed are prepared as exportable assets within Figma (preferably SVG for icons, PNG @1x, @2x, @3x resolutions for raster images). Naming conventions for assets should be established.
45:     *   **Prototyping:** Key user flows are linked using Figma's prototyping features to demonstrate navigation and interactions.
46: 
47: 3.  **Handoff Meeting:**
48:     *   The Designer schedules a walkthrough session with the assigned Frontend Developer(s) and relevant QA/PM roles.
49:     *   **Agenda:**
50:         *   Present the overall user flow(s).
51:         *   Walk through key screens, highlighting interactions, transitions, and edge cases.
52:         *   Review reusable components and their variants/states.
53:         *   Point out specific Fluent UI patterns or library components being used/customized.
54:         *   Explain the structure of the Figma file (Styles, Components, Assets).
55:         *   Answer developer questions.
56: 
57: 4.  **Providing Access:**
58:     *   Frontend developers are given "View" or "Edit" (if needed for inspection plugins) access to the finalized Figma file/page.
59: 
60: 5.  **Implementation & Clarification:**
61:     *   Frontend developers translate the Figma designs and specifications into React Native code, utilizing the agreed-upon component library strategy.
62:     *   Developers use the Figma Inspect panel to get exact values for styles and spacing.
63:     *   Developers export required assets directly from Figma.
64:     *   Developers use the designated communication channel (Slack/Teams) to ask clarifying questions as they arise during implementation. Designers should be responsive.
65: 
66: 6.  **Design QA:**
67:     *   Once a feature/component is implemented (preferably on a device or simulator build shared via a Staging/Dev environment), the Designer performs a Design QA review.
68:     *   Compare the implementation against the Figma designs for visual fidelity, pixel perfection (within reason), interaction accuracy, and adherence to Fluent UI principles.
69:     *   Provide feedback via the project management tool (Jira/Trello comments/bugs) or a dedicated feedback tool, referencing specific screens/components.
70: 
71: **6. Key Deliverables from Design**
72: 
73: *   **Link to the finalized Figma file**, properly organized and prepared as described above.
74: *   Clear specification of **required font files** if using custom fonts not available by default.
75: *   Defined **asset export settings** and naming conventions.
76: *   Documentation (within Figma or linked) clarifying the **component library strategy** (use of `fluentui-react-native` vs. custom build) and specific customizations needed.
77: 
78: **7. Frontend Developer Responsibilities**
79: 
80: *   Attend the handoff meeting and ask clarifying questions.
81: *   Use the Figma file and Inspect panel as the source of truth for UI specifications.
82: *   Implement components and screens adhering to the provided specs and Fluent UI guidelines.
83: *   Build/update the Storybook documentation for reusable components.
84: *   Export assets correctly.
85: *   Communicate proactively if ambiguities or technical limitations arise.
86: *   Facilitate Design QA by providing access to implemented builds.
87: *   Address Design QA feedback.
88: 
89: **8. Conclusion**
90: 
91: This handoff process, centered around Figma and clear communication, aims to streamline the integration of finalized Fluent UI-inspired designs into the Huberman App's React Native frontend. By following these steps, we can ensure consistency, accuracy, and efficient collaboration between the design and development teams.
````

## File: app_documentation/user_stories_mvp.md
````markdown
  1: **Huberman App: User Stories & MVP Definition**
  2: 
  3: **1. Introduction**
  4: 
  5: This document translates the features outlined in `app_description.md` into specific User Stories using the standard "As a..., I want..., so that..." format. These stories form the basis for the product backlog. It also proposes a Minimum Viable Product (MVP) scope, focusing on delivering core value and validating the fundamental Freemium model.
  6: 
  7: These stories should be imported into a project management tool (e.g., Jira, Trello) for estimation, tracking, and prioritization.
  8: 
  9: **2. User Story Backlog**
 10: 
 11: *(Note: These stories represent functional requirements. Technical tasks like "Set up CI/CD" or "Configure database backups" are also necessary but are typically tracked separately or as sub-tasks.)*
 12: 
 13: **2.1. Core & Foundation (Applies to All Users)**
 14: 
 15: *   **Story (Onboarding):** As a New User, I want to experience a simple onboarding flow that explains the app's core purpose and how to navigate basic features (like finding protocols and summaries) so that I can quickly understand how to use the app.
 16: *   **Story (Authentication):** As a User, I want to register for a new account using my email and a password so that I can securely access the app's features.
 17: *   **Story (Authentication):** As a registered User, I want to log in using my email and password so that I can access my personalized data and subscription status.
 18: *   **Story (Authentication):** As a logged-in User, I want to be able to log out of the app so that I can secure my session.
 19: *   **Story (Authentication):** As a User who forgot their password, I want to request a password reset via email so that I can regain access to my account.
 20: *   **Story (Navigation):** As a User, I want clear and intuitive navigation (e.g., bottom tabs, menus) so that I can easily find different sections like protocols, notes, and settings.
 21: 
 22: **2.2. Free Tier Features**
 23: 
 24: *   **Story (Content Access):** As a Free User, I want to view short summaries and brief explanations for a pre-defined set of foundational protocols so that I can understand the core concepts without a subscription.
 25: *   **Story (Reminders):** As a Free User, I want to receive pre-set (non-customizable) push notification reminders for foundational daily protocols (e.g., Morning Sunlight) so that I can start building basic habits.
 26: *   **Story (Notes):** As a Free User, I want to create and view a limited number of simple text notes linked to foundational protocols/episodes so that I can record my personal reflections within basic limits.
 27: *   **Story (Premium Prompt):** As a Free User, I want to see clear indicators for premium-only content/features and prompts/information on how to upgrade so that I understand the value proposition of the Premium tier.
 28: 
 29: **2.3. Premium Tier Features**
 30: 
 31: *   **Story (Subscription Purchase):** As a User, I want to easily view the Premium subscription offers (monthly/annual pricing) and initiate the purchase process through the native App Store/Google Play interface so that I can upgrade my account.
 32: *   **Story (Subscription Status):** As a User, I want to see my current subscription status (Free/Premium, renewal/expiry date) within the app settings so that I know my access level.
 33: *   **Story (Content Access - Premium):** As a Premium User, I want to access the *full library* of protocols (beyond foundational ones) so that I can explore and apply the complete range of Huberman Lab recommendations.
 34: *   **Story (Content Access - Premium):** As a Premium User, I want to access detailed explanations, step-by-step implementation guides, and curated resource links (where available) for *all* protocols so that I can fully understand the science and apply the protocols effectively.
 35: *   **Story (Content Access - Premium):** As a Premium User, I want to read 'key takeaway' summaries for episodes/protocols so that I can quickly grasp the most critical points.
 36: *   **Story (Reminders - Premium):** As a Premium User, I want to set *customizable* push notification reminders for *any* protocol (choosing time, frequency, specific days) so that I can get timely prompts tailored to my routine.
 37: *   **Story (Reminders - Premium):** As a Premium User, I want to manage my custom reminders (edit time/frequency, activate/deactivate, delete) so that I can keep my prompts up-to-date.
 38: *   **Story (Notes - Premium):** As a Premium User, I want to create *unlimited* personal notes so that I can record extensive thoughts without restriction.
 39: *   **Story (Tracking - Premium):** As a Premium User, I want to mark specific protocols as 'completed' for a given day so that I can track my adherence.
 40: *   **Story (Tracking - Premium):** As a Premium User, I want to see basic visualizations of my tracking data (e.g., a completion calendar view, current streak) for a selected protocol so that I can monitor my consistency.
 41: *   **Story (Offline Access - Premium):** As a Premium User, I want to download protocol summaries, guides, and my personal notes for offline access so that I can use the app when I don't have connectivity. *(Potential Post-MVP)*
 42: *   **Story (Advanced Notes - Premium):** As a Premium User, I want advanced organization features for notes (like tags or search) so that I can effectively manage my learning and reflections. *(Potential Post-MVP)*
 43: *   **Story (Community Notes - Premium):** As a Premium User, I want the *option* to make specific notes public (linked to an episode/protocol) so that I can share my takeaways with the community. *(Potential Post-MVP)*
 44: *   **Story (Community Notes - Premium):** As a Premium User, I want to view public notes shared by other premium users on specific episodes/protocols so that I can learn from the community's insights. *(Potential Post-MVP)*
 45: *   **Story (Personalized Routines - Premium):** As a Premium User, I want to create personalized routines ('stacks') by grouping selected protocols together so that I can manage my daily/weekly practices efficiently. *(Potential Post-MVP)*
 46: 
 47: **2.4. Technical / Backend Stories**
 48: 
 49: *   **Story (Tech):** Implement backend API endpoints for user registration, login (token generation), logout, and password reset flow.
 50: *   **Story (Tech):** Implement backend API endpoints for CRUD operations on user profiles.
 51: *   **Story (Tech):** Implement backend API endpoints to serve content (episodes, protocols, summaries) with filtering logic based on user subscription status (Free vs. Premium).
 52: *   **Story (Tech):** Implement backend API endpoints for CRUD operations on notes, enforcing free-tier limits and premium permissions.
 53: *   **Story (Tech):** Implement backend API endpoints for CRUD operations on custom reminders (Premium only).
 54: *   **Story (Tech):** Implement backend API endpoints for logging and retrieving adherence tracking data (Premium only).
 55: *   **Story (Tech):** Implement backend webhook endpoints for Stripe/Apple/Google to receive and process subscription lifecycle events (created, renewed, canceled, expired, failed).
 56: *   **Story (Tech):** Implement core subscription status checking logic (`SubscriptionServiceInterface::userHasActivePremiumSubscription`) including caching.
 57: *   **Story (Tech):** Implement API middleware (`CheckPremiumAccess`) to protect premium endpoints.
 58: *   **Story (Tech):** Implement the reminder scheduling logic (Console command + Queued Jobs) and push notification sending via Firebase Admin SDK / APNS.
 59: *   **Story (Tech):** Define and implement all required database migrations based on `database_plan.md`.
 60: *   **Story (Tech):** Set up project foundation: Base Laravel application, React Native project, Dockerized local development environment.
 61: 
 62: **3. Proposed Minimum Viable Product (MVP) Scope**
 63: 
 64: The MVP aims to validate the core value proposition: providing structured Huberman content and actionable reminders, with a functional path to upgrade for more comprehensive features.
 65: 
 66: **MVP Backlog:**
 67: 
 68: *   **Foundation:**
 69:     *   All stories under "Core & Foundation" (Onboarding, Auth, Navigation).
 70:     *   Tech: Set up project foundation (Laravel, RN, Docker).
 71:     *   Tech: Implement basic database migrations (users, plans, subscriptions, basic content).
 72:     *   Tech: Implement Auth API endpoints.
 73: *   **Free Tier Experience:**
 74:     *   Story: View short summaries/explanations for *foundational* protocols.
 75:     *   Story: Receive *pre-set* reminders for foundational protocols.
 76:     *   Story: See clear prompts/indicators to upgrade.
 77:     *   Tech: Implement content API with basic free/premium filtering.
 78:     *   Tech: Implement basic reminder sending logic for free tier.
 79: *   **Subscription Flow:**
 80:     *   Story: View Premium subscription offers and initiate purchase via IAP.
 81:     *   Story: See current subscription status in settings.
 82:     *   Tech: Implement API endpoints for plans/subscription status.
 83:     *   Tech: Implement *full* backend webhook handling for chosen provider(s) to update `subscriptions` table correctly.
 84:     *   Tech: Implement *frontend* IAP purchase flow (`react-native-iap`).
 85:     *   Tech: Implement API middleware/policies for feature gating (`CheckPremiumAccess`).
 86: *   **Core Premium Value (Validation):**
 87:     *   Story: Access the *full library* of protocol *summaries* (unlocking more content than free tier).
 88:     *   Story: Set *one type* of simple customizable reminder (e.g., daily at a specific time) for *any* protocol. (Demonstrates core premium reminder value).
 89:     *   Tech: Implement custom reminder API endpoints (basic create/view/delete).
 90:     *   Tech: Implement scheduling/sending logic for custom reminders.
 91: 
 92: **Excluded from MVP (Potential Phase 2+):**
 93: 
 94: *   Detailed explanations/implementation guides (Premium Content Depth)
 95: *   Resource links (Premium Content Depth)
 96: *   Key Takeaways (Premium Content Depth)
 97: *   Advanced reminder customization (complex frequencies, snooze)
 98: *   Note-taking (even limited Free tier might be deferred if complex)
 99: *   Tracking features (logging adherence, visualizations)
100: *   Offline Access
101: *   Advanced Note features (unlimited, tags, search, public notes)
102: *   Community Features
103: *   Personalized Routines/Stacks
104: *   Password Reset (could be deferred slightly if needed, but usually core)
105: 
106: **4. Next Steps**
107: 
108: 1.  Import these stories into the chosen project management tool (Jira/Trello).
109: 2.  Refine story details and add acceptance criteria.
110: 3.  Estimate the effort for each story (e.g., using Story Points) with the development team.
111: 4.  Prioritize the backlog further, confirming the MVP scope based on estimations and strategic goals.
112: 5.  Begin sprint planning based on the prioritized MVP backlog.
````

## File: ios/hubermanAppFrontend/Images.xcassets/AppIcon.appiconset/Contents.json
````json
 1: {
 2:   "images" : [
 3:     {
 4:       "idiom" : "iphone",
 5:       "scale" : "2x",
 6:       "size" : "20x20"
 7:     },
 8:     {
 9:       "idiom" : "iphone",
10:       "scale" : "3x",
11:       "size" : "20x20"
12:     },
13:     {
14:       "idiom" : "iphone",
15:       "scale" : "2x",
16:       "size" : "29x29"
17:     },
18:     {
19:       "idiom" : "iphone",
20:       "scale" : "3x",
21:       "size" : "29x29"
22:     },
23:     {
24:       "idiom" : "iphone",
25:       "scale" : "2x",
26:       "size" : "40x40"
27:     },
28:     {
29:       "idiom" : "iphone",
30:       "scale" : "3x",
31:       "size" : "40x40"
32:     },
33:     {
34:       "idiom" : "iphone",
35:       "scale" : "2x",
36:       "size" : "60x60"
37:     },
38:     {
39:       "idiom" : "iphone",
40:       "scale" : "3x",
41:       "size" : "60x60"
42:     },
43:     {
44:       "idiom" : "ios-marketing",
45:       "scale" : "1x",
46:       "size" : "1024x1024"
47:     }
48:   ],
49:   "info" : {
50:     "author" : "xcode",
51:     "version" : 1
52:   }
53: }
````

## File: ios/hubermanAppFrontend/Images.xcassets/Contents.json
````json
1: {
2:   "info" : {
3:     "version" : 1,
4:     "author" : "xcode"
5:   }
6: }
````

## File: ios/hubermanAppFrontend/Info.plist
````
 1: <?xml version="1.0" encoding="UTF-8"?>
 2: <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
 3: <plist version="1.0">
 4: <dict>
 5: 	<key>CFBundleDevelopmentRegion</key>
 6: 	<string>en</string>
 7: 	<key>CFBundleDisplayName</key>
 8: 	<string>hubermanAppFrontend</string>
 9: 	<key>CFBundleExecutable</key>
10: 	<string>$(EXECUTABLE_NAME)</string>
11: 	<key>CFBundleIdentifier</key>
12: 	<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
13: 	<key>CFBundleInfoDictionaryVersion</key>
14: 	<string>6.0</string>
15: 	<key>CFBundleName</key>
16: 	<string>$(PRODUCT_NAME)</string>
17: 	<key>CFBundlePackageType</key>
18: 	<string>APPL</string>
19: 	<key>CFBundleShortVersionString</key>
20: 	<string>$(MARKETING_VERSION)</string>
21: 	<key>CFBundleSignature</key>
22: 	<string>????</string>
23: 	<key>CFBundleVersion</key>
24: 	<string>$(CURRENT_PROJECT_VERSION)</string>
25: 	<key>LSRequiresIPhoneOS</key>
26: 	<true/>
27: 	<key>NSAppTransportSecurity</key>
28: 	<dict>
29: 	  <!-- Do not change NSAllowsArbitraryLoads to true, or you will risk app rejection! -->
30: 		<key>NSAllowsArbitraryLoads</key>
31: 		<false/>
32: 		<key>NSAllowsLocalNetworking</key>
33: 		<true/>
34: 	</dict>
35: 	<key>NSLocationWhenInUseUsageDescription</key>
36: 	<string></string>
37: 	<key>UILaunchStoryboardName</key>
38: 	<string>LaunchScreen</string>
39: 	<key>UIRequiredDeviceCapabilities</key>
40: 	<array>
41: 		<string>arm64</string>
42: 	</array>
43: 	<key>UISupportedInterfaceOrientations</key>
44: 	<array>
45: 		<string>UIInterfaceOrientationPortrait</string>
46: 		<string>UIInterfaceOrientationLandscapeLeft</string>
47: 		<string>UIInterfaceOrientationLandscapeRight</string>
48: 	</array>
49: 	<key>UIViewControllerBasedStatusBarAppearance</key>
50: 	<false/>
51: </dict>
52: </plist>
````

## File: ios/hubermanAppFrontend/LaunchScreen.storyboard
````
 1: <?xml version="1.0" encoding="UTF-8"?>
 2: <document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="15702" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" launchScreen="YES" useTraitCollections="YES" useSafeAreas="YES" colorMatched="YES" initialViewController="01J-lp-oVM">
 3:     <device id="retina4_7" orientation="portrait" appearance="light"/>
 4:     <dependencies>
 5:         <deployment identifier="iOS"/>
 6:         <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="15704"/>
 7:         <capability name="Safe area layout guides" minToolsVersion="9.0"/>
 8:         <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>
 9:     </dependencies>
10:     <scenes>
11:         <!--View Controller-->
12:         <scene sceneID="EHf-IW-A2E">
13:             <objects>
14:                 <viewController id="01J-lp-oVM" sceneMemberID="viewController">
15:                     <view key="view" contentMode="scaleToFill" id="Ze5-6b-2t3">
16:                         <rect key="frame" x="0.0" y="0.0" width="375" height="667"/>
17:                         <autoresizingMask key="autoresizingMask" widthSizable="YES" heightSizable="YES"/>
18:                         <subviews>
19:                             <label opaque="NO" clipsSubviews="YES" userInteractionEnabled="NO" contentMode="left" horizontalHuggingPriority="251" verticalHuggingPriority="251" text="hubermanAppFrontend" textAlignment="center" lineBreakMode="middleTruncation" baselineAdjustment="alignBaselines" minimumFontSize="18" translatesAutoresizingMaskIntoConstraints="NO" id="GJd-Yh-RWb">
20:                                 <rect key="frame" x="0.0" y="202" width="375" height="43"/>
21:                                 <fontDescription key="fontDescription" type="boldSystem" pointSize="36"/>
22:                                 <nil key="highlightedColor"/>
23:                             </label>
24:                             <label opaque="NO" clipsSubviews="YES" userInteractionEnabled="NO" contentMode="left" horizontalHuggingPriority="251" verticalHuggingPriority="251" text="Powered by React Native" textAlignment="center" lineBreakMode="tailTruncation" baselineAdjustment="alignBaselines" minimumFontSize="9" translatesAutoresizingMaskIntoConstraints="NO" id="MN2-I3-ftu">
25:                                 <rect key="frame" x="0.0" y="626" width="375" height="21"/>
26:                                 <fontDescription key="fontDescription" type="system" pointSize="17"/>
27:                                 <nil key="highlightedColor"/>
28:                             </label>
29:                         </subviews>
30:                         <color key="backgroundColor" systemColor="systemBackgroundColor" cocoaTouchSystemColor="whiteColor"/>
31:                         <constraints>
32:                             <constraint firstItem="Bcu-3y-fUS" firstAttribute="bottom" secondItem="MN2-I3-ftu" secondAttribute="bottom" constant="20" id="OZV-Vh-mqD"/>
33:                             <constraint firstItem="Bcu-3y-fUS" firstAttribute="centerX" secondItem="GJd-Yh-RWb" secondAttribute="centerX" id="Q3B-4B-g5h"/>
34:                             <constraint firstItem="MN2-I3-ftu" firstAttribute="centerX" secondItem="Bcu-3y-fUS" secondAttribute="centerX" id="akx-eg-2ui"/>
35:                             <constraint firstItem="MN2-I3-ftu" firstAttribute="leading" secondItem="Bcu-3y-fUS" secondAttribute="leading" id="i1E-0Y-4RG"/>
36:                             <constraint firstItem="GJd-Yh-RWb" firstAttribute="centerY" secondItem="Ze5-6b-2t3" secondAttribute="bottom" multiplier="1/3" constant="1" id="moa-c2-u7t"/>
37:                             <constraint firstItem="GJd-Yh-RWb" firstAttribute="leading" secondItem="Bcu-3y-fUS" secondAttribute="leading" symbolic="YES" id="x7j-FC-K8j"/>
38:                         </constraints>
39:                         <viewLayoutGuide key="safeArea" id="Bcu-3y-fUS"/>
40:                     </view>
41:                 </viewController>
42:                 <placeholder placeholderIdentifier="IBFirstResponder" id="iYj-Kq-Ea1" userLabel="First Responder" sceneMemberID="firstResponder"/>
43:             </objects>
44:             <point key="canvasLocation" x="52.173913043478265" y="375"/>
45:         </scene>
46:     </scenes>
47: </document>
````

## File: ios/hubermanAppFrontend/PrivacyInfo.xcprivacy
````
 1: <?xml version="1.0" encoding="UTF-8"?>
 2: <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
 3: <plist version="1.0">
 4: <dict>
 5: 	<key>NSPrivacyAccessedAPITypes</key>
 6: 	<array>
 7: 		<dict>
 8: 			<key>NSPrivacyAccessedAPIType</key>
 9: 			<string>NSPrivacyAccessedAPICategoryFileTimestamp</string>
10: 			<key>NSPrivacyAccessedAPITypeReasons</key>
11: 			<array>
12: 				<string>C617.1</string>
13: 			</array>
14: 		</dict>
15: 		<dict>
16: 			<key>NSPrivacyAccessedAPIType</key>
17: 			<string>NSPrivacyAccessedAPICategoryUserDefaults</string>
18: 			<key>NSPrivacyAccessedAPITypeReasons</key>
19: 			<array>
20: 				<string>CA92.1</string>
21: 			</array>
22: 		</dict>
23: 		<dict>
24: 			<key>NSPrivacyAccessedAPIType</key>
25: 			<string>NSPrivacyAccessedAPICategorySystemBootTime</string>
26: 			<key>NSPrivacyAccessedAPITypeReasons</key>
27: 			<array>
28: 				<string>35F9.1</string>
29: 			</array>
30: 		</dict>
31: 	</array>
32: 	<key>NSPrivacyCollectedDataTypes</key>
33: 	<array/>
34: 	<key>NSPrivacyTracking</key>
35: 	<false/>
36: </dict>
37: </plist>
````

## File: ios/hubermanAppFrontend.xcodeproj/xcshareddata/xcschemes/hubermanAppFrontend.xcscheme
````
 1: <?xml version="1.0" encoding="UTF-8"?>
 2: <Scheme
 3:    LastUpgradeVersion = "1210"
 4:    version = "1.3">
 5:    <BuildAction
 6:       parallelizeBuildables = "YES"
 7:       buildImplicitDependencies = "YES">
 8:       <BuildActionEntries>
 9:          <BuildActionEntry
10:             buildForTesting = "YES"
11:             buildForRunning = "YES"
12:             buildForProfiling = "YES"
13:             buildForArchiving = "YES"
14:             buildForAnalyzing = "YES">
15:             <BuildableReference
16:                BuildableIdentifier = "primary"
17:                BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
18:                BuildableName = "hubermanAppFrontend.app"
19:                BlueprintName = "hubermanAppFrontend"
20:                ReferencedContainer = "container:hubermanAppFrontend.xcodeproj">
21:             </BuildableReference>
22:          </BuildActionEntry>
23:       </BuildActionEntries>
24:    </BuildAction>
25:    <TestAction
26:       buildConfiguration = "Debug"
27:       selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
28:       selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
29:       shouldUseLaunchSchemeArgsEnv = "YES">
30:       <Testables>
31:          <TestableReference
32:             skipped = "NO">
33:             <BuildableReference
34:                BuildableIdentifier = "primary"
35:                BlueprintIdentifier = "00E356ED1AD99517003FC87E"
36:                BuildableName = "hubermanAppFrontendTests.xctest"
37:                BlueprintName = "hubermanAppFrontendTests"
38:                ReferencedContainer = "container:hubermanAppFrontend.xcodeproj">
39:             </BuildableReference>
40:          </TestableReference>
41:       </Testables>
42:    </TestAction>
43:    <LaunchAction
44:       buildConfiguration = "Debug"
45:       selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
46:       selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
47:       launchStyle = "0"
48:       useCustomWorkingDirectory = "NO"
49:       ignoresPersistentStateOnLaunch = "NO"
50:       debugDocumentVersioning = "YES"
51:       debugServiceExtension = "internal"
52:       allowLocationSimulation = "YES">
53:       <BuildableProductRunnable
54:          runnableDebuggingMode = "0">
55:          <BuildableReference
56:             BuildableIdentifier = "primary"
57:             BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
58:             BuildableName = "hubermanAppFrontend.app"
59:             BlueprintName = "hubermanAppFrontend"
60:             ReferencedContainer = "container:hubermanAppFrontend.xcodeproj">
61:          </BuildableReference>
62:       </BuildableProductRunnable>
63:    </LaunchAction>
64:    <ProfileAction
65:       buildConfiguration = "Release"
66:       shouldUseLaunchSchemeArgsEnv = "YES"
67:       savedToolIdentifier = ""
68:       useCustomWorkingDirectory = "NO"
69:       debugDocumentVersioning = "YES">
70:       <BuildableProductRunnable
71:          runnableDebuggingMode = "0">
72:          <BuildableReference
73:             BuildableIdentifier = "primary"
74:             BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
75:             BuildableName = "hubermanAppFrontend.app"
76:             BlueprintName = "hubermanAppFrontend"
77:             ReferencedContainer = "container:hubermanAppFrontend.xcodeproj">
78:          </BuildableReference>
79:       </BuildableProductRunnable>
80:    </ProfileAction>
81:    <AnalyzeAction
82:       buildConfiguration = "Debug">
83:    </AnalyzeAction>
84:    <ArchiveAction
85:       buildConfiguration = "Release"
86:       revealArchiveInOrganizer = "YES">
87:    </ArchiveAction>
88: </Scheme>
````

## File: ios/hubermanAppFrontend.xcodeproj/project.pbxproj
````
  1: // !$*UTF8*$!
  2: {
  3: 	archiveVersion = 1;
  4: 	classes = {
  5: 	};
  6: 	objectVersion = 54;
  7: 	objects = {
  8: 
  9: /* Begin PBXBuildFile section */
 10: 		0C80B921A6F3F58F76C31292 /* libPods-hubermanAppFrontend.a in Frameworks */ = {isa = PBXBuildFile; fileRef = 5DCACB8F33CDC322A6C60F78 /* libPods-hubermanAppFrontend.a */; };
 11: 		13B07FBF1A68108700A75B9A /* Images.xcassets in Resources */ = {isa = PBXBuildFile; fileRef = 13B07FB51A68108700A75B9A /* Images.xcassets */; };
 12: 		761780ED2CA45674006654EE /* AppDelegate.swift in Sources */ = {isa = PBXBuildFile; fileRef = 761780EC2CA45674006654EE /* AppDelegate.swift */; };
 13: 		81AB9BB82411601600AC10FF /* LaunchScreen.storyboard in Resources */ = {isa = PBXBuildFile; fileRef = 81AB9BB72411601600AC10FF /* LaunchScreen.storyboard */; };
 14: /* End PBXBuildFile section */
 15: 
 16: /* Begin PBXContainerItemProxy section */
 17: 		00E356F41AD99517003FC87E /* PBXContainerItemProxy */ = {
 18: 			isa = PBXContainerItemProxy;
 19: 			containerPortal = 83CBB9F71A601CBA00E9B192 /* Project object */;
 20: 			proxyType = 1;
 21: 			remoteGlobalIDString = 13B07F861A680F5B00A75B9A;
 22: 			remoteInfo = hubermanAppFrontend;
 23: 		};
 24: /* End PBXContainerItemProxy section */
 25: 
 26: /* Begin PBXFileReference section */
 27: 		00E356F11AD99517003FC87E /* Info.plist */ = {isa = PBXFileReference; lastKnownFileType = text.plist.xml; path = Info.plist; sourceTree = "<group>"; };
 28: 		13B07F961A680F5B00A75B9A /* hubermanAppFrontend.app */ = {isa = PBXFileReference; explicitFileType = wrapper.application; includeInIndex = 0; path = hubermanAppFrontend.app; sourceTree = BUILT_PRODUCTS_DIR; };
 29: 		13B07FB51A68108700A75B9A /* Images.xcassets */ = {isa = PBXFileReference; lastKnownFileType = folder.assetcatalog; name = Images.xcassets; path = hubermanAppFrontend/Images.xcassets; sourceTree = "<group>"; };
 30: 		13B07FB61A68108700A75B9A /* Info.plist */ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = text.plist.xml; name = Info.plist; path = hubermanAppFrontend/Info.plist; sourceTree = "<group>"; };
 31: 		13B07FB81A68108700A75B9A /* PrivacyInfo.xcprivacy */ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = text.plist.xml; name = PrivacyInfo.xcprivacy; path = hubermanAppFrontend/PrivacyInfo.xcprivacy; sourceTree = "<group>"; };
 32: 		3B4392A12AC88292D35C810B /* Pods-hubermanAppFrontend.debug.xcconfig */ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-hubermanAppFrontend.debug.xcconfig"; path = "Target Support Files/Pods-hubermanAppFrontend/Pods-hubermanAppFrontend.debug.xcconfig"; sourceTree = "<group>"; };
 33: 		5709B34CF0A7D63546082F79 /* Pods-hubermanAppFrontend.release.xcconfig */ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-hubermanAppFrontend.release.xcconfig"; path = "Target Support Files/Pods-hubermanAppFrontend/Pods-hubermanAppFrontend.release.xcconfig"; sourceTree = "<group>"; };
 34: 		5DCACB8F33CDC322A6C60F78 /* libPods-hubermanAppFrontend.a */ = {isa = PBXFileReference; explicitFileType = archive.ar; includeInIndex = 0; path = "libPods-hubermanAppFrontend.a"; sourceTree = BUILT_PRODUCTS_DIR; };
 35: 		761780EC2CA45674006654EE /* AppDelegate.swift */ = {isa = PBXFileReference; lastKnownFileType = sourcecode.swift; name = AppDelegate.swift; path = hubermanAppFrontend/AppDelegate.swift; sourceTree = "<group>"; };
 36: 		81AB9BB72411601600AC10FF /* LaunchScreen.storyboard */ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = file.storyboard; name = LaunchScreen.storyboard; path = hubermanAppFrontend/LaunchScreen.storyboard; sourceTree = "<group>"; };
 37: 		ED297162215061F000B7C4FE /* JavaScriptCore.framework */ = {isa = PBXFileReference; lastKnownFileType = wrapper.framework; name = JavaScriptCore.framework; path = System/Library/Frameworks/JavaScriptCore.framework; sourceTree = SDKROOT; };
 38: /* End PBXFileReference section */
 39: 
 40: /* Begin PBXFrameworksBuildPhase section */
 41: 		13B07F8C1A680F5B00A75B9A /* Frameworks */ = {
 42: 			isa = PBXFrameworksBuildPhase;
 43: 			buildActionMask = 2147483647;
 44: 			files = (
 45: 				0C80B921A6F3F58F76C31292 /* libPods-hubermanAppFrontend.a in Frameworks */,
 46: 			);
 47: 			runOnlyForDeploymentPostprocessing = 0;
 48: 		};
 49: /* End PBXFrameworksBuildPhase section */
 50: 
 51: /* Begin PBXGroup section */
 52: 		00E356F01AD99517003FC87E /* Supporting Files */ = {
 53: 			isa = PBXGroup;
 54: 			children = (
 55: 				00E356F11AD99517003FC87E /* Info.plist */,
 56: 			);
 57: 			name = "Supporting Files";
 58: 			sourceTree = "<group>";
 59: 		};
 60: 		13B07FAE1A68108700A75B9A /* hubermanAppFrontend */ = {
 61: 			isa = PBXGroup;
 62: 			children = (
 63: 				13B07FB51A68108700A75B9A /* Images.xcassets */,
 64: 				761780EC2CA45674006654EE /* AppDelegate.swift */,
 65: 				13B07FB61A68108700A75B9A /* Info.plist */,
 66: 				81AB9BB72411601600AC10FF /* LaunchScreen.storyboard */,
 67: 				13B07FB81A68108700A75B9A /* PrivacyInfo.xcprivacy */,
 68: 			);
 69: 			name = hubermanAppFrontend;
 70: 			sourceTree = "<group>";
 71: 		};
 72: 		2D16E6871FA4F8E400B85C8A /* Frameworks */ = {
 73: 			isa = PBXGroup;
 74: 			children = (
 75: 				ED297162215061F000B7C4FE /* JavaScriptCore.framework */,
 76: 				5DCACB8F33CDC322A6C60F78 /* libPods-hubermanAppFrontend.a */,
 77: 			);
 78: 			name = Frameworks;
 79: 			sourceTree = "<group>";
 80: 		};
 81: 		832341AE1AAA6A7D00B99B32 /* Libraries */ = {
 82: 			isa = PBXGroup;
 83: 			children = (
 84: 			);
 85: 			name = Libraries;
 86: 			sourceTree = "<group>";
 87: 		};
 88: 		83CBB9F61A601CBA00E9B192 = {
 89: 			isa = PBXGroup;
 90: 			children = (
 91: 				13B07FAE1A68108700A75B9A /* hubermanAppFrontend */,
 92: 				832341AE1AAA6A7D00B99B32 /* Libraries */,
 93: 				83CBBA001A601CBA00E9B192 /* Products */,
 94: 				2D16E6871FA4F8E400B85C8A /* Frameworks */,
 95: 				BBD78D7AC51CEA395F1C20DB /* Pods */,
 96: 			);
 97: 			indentWidth = 2;
 98: 			sourceTree = "<group>";
 99: 			tabWidth = 2;
100: 			usesTabs = 0;
101: 		};
102: 		83CBBA001A601CBA00E9B192 /* Products */ = {
103: 			isa = PBXGroup;
104: 			children = (
105: 				13B07F961A680F5B00A75B9A /* hubermanAppFrontend.app */,
106: 			);
107: 			name = Products;
108: 			sourceTree = "<group>";
109: 		};
110: 		BBD78D7AC51CEA395F1C20DB /* Pods */ = {
111: 			isa = PBXGroup;
112: 			children = (
113: 				3B4392A12AC88292D35C810B /* Pods-hubermanAppFrontend.debug.xcconfig */,
114: 				5709B34CF0A7D63546082F79 /* Pods-hubermanAppFrontend.release.xcconfig */,
115: 			);
116: 			path = Pods;
117: 			sourceTree = "<group>";
118: 		};
119: /* End PBXGroup section */
120: 
121: /* Begin PBXNativeTarget section */
122: 		13B07F861A680F5B00A75B9A /* hubermanAppFrontend */ = {
123: 			isa = PBXNativeTarget;
124: 			buildConfigurationList = 13B07F931A680F5B00A75B9A /* Build configuration list for PBXNativeTarget "hubermanAppFrontend" */;
125: 			buildPhases = (
126: 				C38B50BA6285516D6DCD4F65 /* [CP] Check Pods Manifest.lock */,
127: 				13B07F871A680F5B00A75B9A /* Sources */,
128: 				13B07F8C1A680F5B00A75B9A /* Frameworks */,
129: 				13B07F8E1A680F5B00A75B9A /* Resources */,
130: 				00DD1BFF1BD5951E006B06BC /* Bundle React Native code and images */,
131: 				00EEFC60759A1932668264C0 /* [CP] Embed Pods Frameworks */,
132: 				E235C05ADACE081382539298 /* [CP] Copy Pods Resources */,
133: 			);
134: 			buildRules = (
135: 			);
136: 			dependencies = (
137: 			);
138: 			name = hubermanAppFrontend;
139: 			productName = hubermanAppFrontend;
140: 			productReference = 13B07F961A680F5B00A75B9A /* hubermanAppFrontend.app */;
141: 			productType = "com.apple.product-type.application";
142: 		};
143: /* End PBXNativeTarget section */
144: 
145: /* Begin PBXProject section */
146: 		83CBB9F71A601CBA00E9B192 /* Project object */ = {
147: 			isa = PBXProject;
148: 			attributes = {
149: 				LastUpgradeCheck = 1210;
150: 				TargetAttributes = {
151: 					13B07F861A680F5B00A75B9A = {
152: 						LastSwiftMigration = 1120;
153: 					};
154: 				};
155: 			};
156: 			buildConfigurationList = 83CBB9FA1A601CBA00E9B192 /* Build configuration list for PBXProject "hubermanAppFrontend" */;
157: 			compatibilityVersion = "Xcode 12.0";
158: 			developmentRegion = en;
159: 			hasScannedForEncodings = 0;
160: 			knownRegions = (
161: 				en,
162: 				Base,
163: 			);
164: 			mainGroup = 83CBB9F61A601CBA00E9B192;
165: 			productRefGroup = 83CBBA001A601CBA00E9B192 /* Products */;
166: 			projectDirPath = "";
167: 			projectRoot = "";
168: 			targets = (
169: 				13B07F861A680F5B00A75B9A /* hubermanAppFrontend */,
170: 			);
171: 		};
172: /* End PBXProject section */
173: 
174: /* Begin PBXResourcesBuildPhase section */
175: 		00E356EC1AD99517003FC87E /* Resources */ = {
176: 			isa = PBXResourcesBuildPhase;
177: 			buildActionMask = 2147483647;
178: 			files = (
179: 			);
180: 			runOnlyForDeploymentPostprocessing = 0;
181: 		};
182: 		13B07F8E1A680F5B00A75B9A /* Resources */ = {
183: 			isa = PBXResourcesBuildPhase;
184: 			buildActionMask = 2147483647;
185: 			files = (
186: 				81AB9BB82411601600AC10FF /* LaunchScreen.storyboard in Resources */,
187: 				13B07FBF1A68108700A75B9A /* Images.xcassets in Resources */,
188: 			);
189: 			runOnlyForDeploymentPostprocessing = 0;
190: 		};
191: /* End PBXResourcesBuildPhase section */
192: 
193: /* Begin PBXShellScriptBuildPhase section */
194: 		00DD1BFF1BD5951E006B06BC /* Bundle React Native code and images */ = {
195: 			isa = PBXShellScriptBuildPhase;
196: 			buildActionMask = 2147483647;
197: 			files = (
198: 			);
199: 			inputPaths = (
200: 				"$(SRCROOT)/.xcode.env.local",
201: 				"$(SRCROOT)/.xcode.env",
202: 			);
203: 			name = "Bundle React Native code and images";
204: 			outputPaths = (
205: 			);
206: 			runOnlyForDeploymentPostprocessing = 0;
207: 			shellPath = /bin/sh;
208: 			shellScript = "set -e\n\nWITH_ENVIRONMENT=\"$REACT_NATIVE_PATH/scripts/xcode/with-environment.sh\"\nREACT_NATIVE_XCODE=\"$REACT_NATIVE_PATH/scripts/react-native-xcode.sh\"\n\n/bin/sh -c \"$WITH_ENVIRONMENT $REACT_NATIVE_XCODE\"\n";
209: 		};
210: 		00EEFC60759A1932668264C0 /* [CP] Embed Pods Frameworks */ = {
211: 			isa = PBXShellScriptBuildPhase;
212: 			buildActionMask = 2147483647;
213: 			files = (
214: 			);
215: 			inputFileListPaths = (
216: 				"${PODS_ROOT}/Target Support Files/Pods-hubermanAppFrontend/Pods-hubermanAppFrontend-frameworks-${CONFIGURATION}-input-files.xcfilelist",
217: 			);
218: 			name = "[CP] Embed Pods Frameworks";
219: 			outputFileListPaths = (
220: 				"${PODS_ROOT}/Target Support Files/Pods-hubermanAppFrontend/Pods-hubermanAppFrontend-frameworks-${CONFIGURATION}-output-files.xcfilelist",
221: 			);
222: 			runOnlyForDeploymentPostprocessing = 0;
223: 			shellPath = /bin/sh;
224: 			shellScript = "\"${PODS_ROOT}/Target Support Files/Pods-hubermanAppFrontend/Pods-hubermanAppFrontend-frameworks.sh\"\n";
225: 			showEnvVarsInLog = 0;
226: 		};
227: 		C38B50BA6285516D6DCD4F65 /* [CP] Check Pods Manifest.lock */ = {
228: 			isa = PBXShellScriptBuildPhase;
229: 			buildActionMask = 2147483647;
230: 			files = (
231: 			);
232: 			inputFileListPaths = (
233: 			);
234: 			inputPaths = (
235: 				"${PODS_PODFILE_DIR_PATH}/Podfile.lock",
236: 				"${PODS_ROOT}/Manifest.lock",
237: 			);
238: 			name = "[CP] Check Pods Manifest.lock";
239: 			outputFileListPaths = (
240: 			);
241: 			outputPaths = (
242: 				"$(DERIVED_FILE_DIR)/Pods-hubermanAppFrontend-checkManifestLockResult.txt",
243: 			);
244: 			runOnlyForDeploymentPostprocessing = 0;
245: 			shellPath = /bin/sh;
246: 			shellScript = "diff \"${PODS_PODFILE_DIR_PATH}/Podfile.lock\" \"${PODS_ROOT}/Manifest.lock\" > /dev/null\nif [ $? != 0 ] ; then\n    # print error to STDERR\n    echo \"error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation.\" >&2\n    exit 1\nfi\n# This output is used by Xcode 'outputs' to avoid re-running this script phase.\necho \"SUCCESS\" > \"${SCRIPT_OUTPUT_FILE_0}\"\n";
247: 			showEnvVarsInLog = 0;
248: 		};
249: 		E235C05ADACE081382539298 /* [CP] Copy Pods Resources */ = {
250: 			isa = PBXShellScriptBuildPhase;
251: 			buildActionMask = 2147483647;
252: 			files = (
253: 			);
254: 			inputFileListPaths = (
255: 				"${PODS_ROOT}/Target Support Files/Pods-hubermanAppFrontend/Pods-hubermanAppFrontend-resources-${CONFIGURATION}-input-files.xcfilelist",
256: 			);
257: 			name = "[CP] Copy Pods Resources";
258: 			outputFileListPaths = (
259: 				"${PODS_ROOT}/Target Support Files/Pods-hubermanAppFrontend/Pods-hubermanAppFrontend-resources-${CONFIGURATION}-output-files.xcfilelist",
260: 			);
261: 			runOnlyForDeploymentPostprocessing = 0;
262: 			shellPath = /bin/sh;
263: 			shellScript = "\"${PODS_ROOT}/Target Support Files/Pods-hubermanAppFrontend/Pods-hubermanAppFrontend-resources.sh\"\n";
264: 			showEnvVarsInLog = 0;
265: 		};
266: /* End PBXShellScriptBuildPhase section */
267: 
268: /* Begin PBXSourcesBuildPhase section */
269: 		13B07F871A680F5B00A75B9A /* Sources */ = {
270: 			isa = PBXSourcesBuildPhase;
271: 			buildActionMask = 2147483647;
272: 			files = (
273: 				761780ED2CA45674006654EE /* AppDelegate.swift in Sources */,
274: 			);
275: 			runOnlyForDeploymentPostprocessing = 0;
276: 		};
277: /* End PBXSourcesBuildPhase section */
278: 
279: /* Begin PBXTargetDependency section */
280: 		00E356F51AD99517003FC87E /* PBXTargetDependency */ = {
281: 			isa = PBXTargetDependency;
282: 			target = 13B07F861A680F5B00A75B9A /* hubermanAppFrontend */;
283: 			targetProxy = 00E356F41AD99517003FC87E /* PBXContainerItemProxy */;
284: 		};
285: /* End PBXTargetDependency section */
286: 
287: /* Begin XCBuildConfiguration section */
288: 		13B07F941A680F5B00A75B9A /* Debug */ = {
289: 			isa = XCBuildConfiguration;
290: 			baseConfigurationReference = 3B4392A12AC88292D35C810B /* Pods-hubermanAppFrontend.debug.xcconfig */;
291: 			buildSettings = {
292: 				ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
293: 				CLANG_ENABLE_MODULES = YES;
294: 				CURRENT_PROJECT_VERSION = 1;
295: 				ENABLE_BITCODE = NO;
296: 				INFOPLIST_FILE = hubermanAppFrontend/Info.plist;
297: 				IPHONEOS_DEPLOYMENT_TARGET = 15.1;
298: 				LD_RUNPATH_SEARCH_PATHS = (
299: 					"$(inherited)",
300: 					"@executable_path/Frameworks",
301: 				);
302: 				MARKETING_VERSION = 1.0;
303: 				OTHER_LDFLAGS = (
304: 					"$(inherited)",
305: 					"-ObjC",
306: 					"-lc++",
307: 				);
308: 				PRODUCT_BUNDLE_IDENTIFIER = "org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)";
309: 				PRODUCT_NAME = hubermanAppFrontend;
310: 				SWIFT_OPTIMIZATION_LEVEL = "-Onone";
311: 				SWIFT_VERSION = 5.0;
312: 				VERSIONING_SYSTEM = "apple-generic";
313: 			};
314: 			name = Debug;
315: 		};
316: 		13B07F951A680F5B00A75B9A /* Release */ = {
317: 			isa = XCBuildConfiguration;
318: 			baseConfigurationReference = 5709B34CF0A7D63546082F79 /* Pods-hubermanAppFrontend.release.xcconfig */;
319: 			buildSettings = {
320: 				ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
321: 				CLANG_ENABLE_MODULES = YES;
322: 				CURRENT_PROJECT_VERSION = 1;
323: 				INFOPLIST_FILE = hubermanAppFrontend/Info.plist;
324: 				IPHONEOS_DEPLOYMENT_TARGET = 15.1;
325: 				LD_RUNPATH_SEARCH_PATHS = (
326: 					"$(inherited)",
327: 					"@executable_path/Frameworks",
328: 				);
329: 				MARKETING_VERSION = 1.0;
330: 				OTHER_LDFLAGS = (
331: 					"$(inherited)",
332: 					"-ObjC",
333: 					"-lc++",
334: 				);
335: 				PRODUCT_BUNDLE_IDENTIFIER = "org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)";
336: 				PRODUCT_NAME = hubermanAppFrontend;
337: 				SWIFT_VERSION = 5.0;
338: 				VERSIONING_SYSTEM = "apple-generic";
339: 			};
340: 			name = Release;
341: 		};
342: 		83CBBA201A601CBA00E9B192 /* Debug */ = {
343: 			isa = XCBuildConfiguration;
344: 			buildSettings = {
345: 				ALWAYS_SEARCH_USER_PATHS = NO;
346: 				CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED = YES;
347: 				CLANG_CXX_LANGUAGE_STANDARD = "c++20";
348: 				CLANG_CXX_LIBRARY = "libc++";
349: 				CLANG_ENABLE_MODULES = YES;
350: 				CLANG_ENABLE_OBJC_ARC = YES;
351: 				CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING = YES;
352: 				CLANG_WARN_BOOL_CONVERSION = YES;
353: 				CLANG_WARN_COMMA = YES;
354: 				CLANG_WARN_CONSTANT_CONVERSION = YES;
355: 				CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS = YES;
356: 				CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
357: 				CLANG_WARN_EMPTY_BODY = YES;
358: 				CLANG_WARN_ENUM_CONVERSION = YES;
359: 				CLANG_WARN_INFINITE_RECURSION = YES;
360: 				CLANG_WARN_INT_CONVERSION = YES;
361: 				CLANG_WARN_NON_LITERAL_NULL_CONVERSION = YES;
362: 				CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF = YES;
363: 				CLANG_WARN_OBJC_LITERAL_CONVERSION = YES;
364: 				CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
365: 				CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER = YES;
366: 				CLANG_WARN_RANGE_LOOP_ANALYSIS = YES;
367: 				CLANG_WARN_STRICT_PROTOTYPES = YES;
368: 				CLANG_WARN_SUSPICIOUS_MOVE = YES;
369: 				CLANG_WARN_UNREACHABLE_CODE = YES;
370: 				CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;
371: 				"CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
372: 				COPY_PHASE_STRIP = NO;
373: 				ENABLE_STRICT_OBJC_MSGSEND = YES;
374: 				ENABLE_TESTABILITY = YES;
375: 				"EXCLUDED_ARCHS[sdk=iphonesimulator*]" = "";
376: 				GCC_C_LANGUAGE_STANDARD = gnu99;
377: 				GCC_DYNAMIC_NO_PIC = NO;
378: 				GCC_NO_COMMON_BLOCKS = YES;
379: 				GCC_OPTIMIZATION_LEVEL = 0;
380: 				GCC_PREPROCESSOR_DEFINITIONS = (
381: 					"DEBUG=1",
382: 					"$(inherited)",
383: 				);
384: 				GCC_SYMBOLS_PRIVATE_EXTERN = NO;
385: 				GCC_WARN_64_TO_32_BIT_CONVERSION = YES;
386: 				GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
387: 				GCC_WARN_UNDECLARED_SELECTOR = YES;
388: 				GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
389: 				GCC_WARN_UNUSED_FUNCTION = YES;
390: 				GCC_WARN_UNUSED_VARIABLE = YES;
391: 				IPHONEOS_DEPLOYMENT_TARGET = 15.1;
392: 				LD_RUNPATH_SEARCH_PATHS = (
393: 					/usr/lib/swift,
394: 					"$(inherited)",
395: 				);
396: 				LIBRARY_SEARCH_PATHS = (
397: 					"\"$(SDKROOT)/usr/lib/swift\"",
398: 					"\"$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)\"",
399: 					"\"$(inherited)\"",
400: 				);
401: 				MTL_ENABLE_DEBUG_INFO = YES;
402: 				ONLY_ACTIVE_ARCH = YES;
403: 				OTHER_CPLUSPLUSFLAGS = (
404: 					"$(OTHER_CFLAGS)",
405: 					"-DFOLLY_NO_CONFIG",
406: 					"-DFOLLY_MOBILE=1",
407: 					"-DFOLLY_USE_LIBCPP=1",
408: 					"-DFOLLY_CFG_NO_COROUTINES=1",
409: 					"-DFOLLY_HAVE_CLOCK_GETTIME=1",
410: 				);
411: 				SDKROOT = iphoneos;
412: 			};
413: 			name = Debug;
414: 		};
415: 		83CBBA211A601CBA00E9B192 /* Release */ = {
416: 			isa = XCBuildConfiguration;
417: 			buildSettings = {
418: 				ALWAYS_SEARCH_USER_PATHS = NO;
419: 				CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED = YES;
420: 				CLANG_CXX_LANGUAGE_STANDARD = "c++20";
421: 				CLANG_CXX_LIBRARY = "libc++";
422: 				CLANG_ENABLE_MODULES = YES;
423: 				CLANG_ENABLE_OBJC_ARC = YES;
424: 				CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING = YES;
425: 				CLANG_WARN_BOOL_CONVERSION = YES;
426: 				CLANG_WARN_COMMA = YES;
427: 				CLANG_WARN_CONSTANT_CONVERSION = YES;
428: 				CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS = YES;
429: 				CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
430: 				CLANG_WARN_EMPTY_BODY = YES;
431: 				CLANG_WARN_ENUM_CONVERSION = YES;
432: 				CLANG_WARN_INFINITE_RECURSION = YES;
433: 				CLANG_WARN_INT_CONVERSION = YES;
434: 				CLANG_WARN_NON_LITERAL_NULL_CONVERSION = YES;
435: 				CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF = YES;
436: 				CLANG_WARN_OBJC_LITERAL_CONVERSION = YES;
437: 				CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
438: 				CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER = YES;
439: 				CLANG_WARN_RANGE_LOOP_ANALYSIS = YES;
440: 				CLANG_WARN_STRICT_PROTOTYPES = YES;
441: 				CLANG_WARN_SUSPICIOUS_MOVE = YES;
442: 				CLANG_WARN_UNREACHABLE_CODE = YES;
443: 				CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;
444: 				"CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
445: 				COPY_PHASE_STRIP = YES;
446: 				ENABLE_NS_ASSERTIONS = NO;
447: 				ENABLE_STRICT_OBJC_MSGSEND = YES;
448: 				"EXCLUDED_ARCHS[sdk=iphonesimulator*]" = "";
449: 				GCC_C_LANGUAGE_STANDARD = gnu99;
450: 				GCC_NO_COMMON_BLOCKS = YES;
451: 				GCC_WARN_64_TO_32_BIT_CONVERSION = YES;
452: 				GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
453: 				GCC_WARN_UNDECLARED_SELECTOR = YES;
454: 				GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
455: 				GCC_WARN_UNUSED_FUNCTION = YES;
456: 				GCC_WARN_UNUSED_VARIABLE = YES;
457: 				IPHONEOS_DEPLOYMENT_TARGET = 15.1;
458: 				LD_RUNPATH_SEARCH_PATHS = (
459: 					/usr/lib/swift,
460: 					"$(inherited)",
461: 				);
462: 				LIBRARY_SEARCH_PATHS = (
463: 					"\"$(SDKROOT)/usr/lib/swift\"",
464: 					"\"$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)\"",
465: 					"\"$(inherited)\"",
466: 				);
467: 				MTL_ENABLE_DEBUG_INFO = NO;
468: 				OTHER_CPLUSPLUSFLAGS = (
469: 					"$(OTHER_CFLAGS)",
470: 					"-DFOLLY_NO_CONFIG",
471: 					"-DFOLLY_MOBILE=1",
472: 					"-DFOLLY_USE_LIBCPP=1",
473: 					"-DFOLLY_CFG_NO_COROUTINES=1",
474: 					"-DFOLLY_HAVE_CLOCK_GETTIME=1",
475: 				);
476: 				SDKROOT = iphoneos;
477: 				VALIDATE_PRODUCT = YES;
478: 			};
479: 			name = Release;
480: 		};
481: /* End XCBuildConfiguration section */
482: 
483: /* Begin XCConfigurationList section */
484: 		13B07F931A680F5B00A75B9A /* Build configuration list for PBXNativeTarget "hubermanAppFrontend" */ = {
485: 			isa = XCConfigurationList;
486: 			buildConfigurations = (
487: 				13B07F941A680F5B00A75B9A /* Debug */,
488: 				13B07F951A680F5B00A75B9A /* Release */,
489: 			);
490: 			defaultConfigurationIsVisible = 0;
491: 			defaultConfigurationName = Release;
492: 		};
493: 		83CBB9FA1A601CBA00E9B192 /* Build configuration list for PBXProject "hubermanAppFrontend" */ = {
494: 			isa = XCConfigurationList;
495: 			buildConfigurations = (
496: 				83CBBA201A601CBA00E9B192 /* Debug */,
497: 				83CBBA211A601CBA00E9B192 /* Release */,
498: 			);
499: 			defaultConfigurationIsVisible = 0;
500: 			defaultConfigurationName = Release;
501: 		};
502: /* End XCConfigurationList section */
503: 	};
504: 	rootObject = 83CBB9F71A601CBA00E9B192 /* Project object */;
505: }
````

## File: ios/.xcode.env
````
 1: # This `.xcode.env` file is versioned and is used to source the environment
 2: # used when running script phases inside Xcode.
 3: # To customize your local environment, you can create an `.xcode.env.local`
 4: # file that is not versioned.
 5: 
 6: # NODE_BINARY variable contains the PATH to the node executable.
 7: #
 8: # Customize the NODE_BINARY variable here.
 9: # For example, to use nvm with brew, add the following line
10: # . "$(brew --prefix nvm)/nvm.sh" --no-use
11: export NODE_BINARY=$(command -v node)
````

## File: public/index.html
````html
 1: <!DOCTYPE html>
 2: <html>
 3:   <head>
 4:     <meta charset="utf-8">
 5:     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 6:     <title>Huberman App</title>
 7:   </head>
 8:   <body>
 9:     <div id="root"></div>
10:     <script src="./bundle.js"></script>
11:   </body>
12: </html>
````

## File: src/components/Button/Button.test.tsx
````typescript
1: import React from 'react';
2: import { render } from '@testing-library/react-native';
3: import Button from './Button';
4: describe('Button', () => {
5:   it('should render without error', () => {
6:     const { getByTestId } = render(<Button title="Test" onPress={() => {}} />);
7:     expect(getByTestId('button')).toBeDefined();
8:   });
9: });
````

## File: src/components/Card.test.tsx
````typescript
1: import React from 'react';
2: import { render } from '@testing-library/react-native';
3: import Card from './Card';
4: describe('Card', () => {
5:   it('should render without error', () => {
6:     const { getByTestId } = render(<Card>Test</Card>);
7:     expect(getByTestId('card')).toBeDefined();
8:   });
9: });
````

## File: src/components/Card.tsx
````typescript
 1: import React from 'react';
 2: import { View, StyleSheet } from 'react-native';
 3: interface Props {
 4:   children: React.ReactNode;
 5:   style?: any;
 6: }
 7: const Card: React.FC<Props> = ({ children, style }) => {
 8:   return (
 9:     <View style={[styles.card, style]}>
10:       {children}
11:     </View>
12:   );
13: };
14: const styles = StyleSheet.create({
15:   card: {
16:     backgroundColor: '#fff',
17:     borderRadius: 8,
18:     padding: 16,
19:     shadowColor: '#000',
20:     shadowOffset: { width: 0, height: 2 },
21:     shadowOpacity: 0.1,
22:     shadowRadius: 4,
23:     elevation: 2,
24:   },
25: });
26: export default Card;
````

## File: src/components/TextInput.test.tsx
````typescript
1: import React from 'react';
2: import { render } from '@testing-library/react-native';
3: import TextInput from './TextInput';
4: describe('TextInput', () => {
5:   it('should render without error', () => {
6:     const { getByTestId } = render(<TextInput />);
7:     expect(getByTestId('text-input')).toBeDefined();
8:   });
9: });
````

## File: src/components/TextInput.tsx
````typescript
 1: import React from 'react';
 2: import { TextInput, StyleSheet, StyleProp, ViewStyle, KeyboardTypeOptions, TextInputProps } from 'react-native';
 3: interface Props {
 4:   placeholder?: string;
 5:   value?: string;
 6:   onChangeText?: (text: string) => void;
 7:   secureTextEntry?: boolean;
 8:   style?: StyleProp<ViewStyle>;
 9:   keyboardType?: KeyboardTypeOptions;
10:   accessibilityLabel?: string;
11:   accessibilityHint?: string;
12:   autoCapitalize?: TextInputProps['autoCapitalize'];
13: }
14: const CustomTextInput: React.FC<Props> = ({ placeholder, value, onChangeText, secureTextEntry, style, keyboardType, accessibilityLabel, accessibilityHint, autoCapitalize }) => {
15:   return (
16:     <TextInput
17:       style={[styles.input, style]}
18:       placeholder={placeholder}
19:       value={value}
20:       onChangeText={onChangeText}
21:       secureTextEntry={secureTextEntry}
22:       keyboardType={keyboardType}
23:       accessibilityLabel={accessibilityLabel}
24:       accessibilityHint={accessibilityHint}
25:       autoCapitalize={autoCapitalize}
26:     />
27:   );
28: };
29: const styles = StyleSheet.create({
30:   input: {
31:     height: 40,
32:     borderColor: 'gray',
33:     borderWidth: 1,
34:     marginBottom: 10,
35:     paddingLeft: 10,
36:     borderRadius: 5,
37:   },
38: });
39: export default CustomTextInput;
````

## File: src/components/UpgradePrompt.test.tsx
````typescript
1: import React from 'react';
2: import { render } from '@testing-library/react-native';
3: import UpgradePrompt from './UpgradePrompt';
4: describe('UpgradePrompt', () => {
5:   it('should render without error', () => {
6:     const { getByTestId } = render(<UpgradePrompt />);
7:     expect(getByTestId('upgrade-prompt')).toBeDefined();
8:   });
9: });
````

## File: src/navigation/AuthStack.d.ts
````typescript
1: import React from 'react';
2: declare const AuthStack: React.FC;
3: export default AuthStack;
````

## File: src/navigation/RootNavigator.d.ts
````typescript
1: export type RootStackParamList = {
2:   Auth: undefined;
3:   App: undefined;
4: };
````

## File: src/screens/Notes/NotesScreen.test.tsx
````typescript
 1: import React from 'react';
 2: import { render } from '@testing-library/react-native';
 3: import NotesScreen from './NotesScreen';
 4: import { Text } from 'react-native';
 5: jest.mock('./NotesScreen', () => {
 6:   const MockNotesScreen = () => <Text>Mock NotesScreen</Text>;
 7:   MockNotesScreen.displayName = 'NotesScreen';
 8:   return {
 9:     __esModule: true,
10:     default: (props: any) => <MockNotesScreen {...props} />,
11:   };
12: });
13: describe('NotesScreen', () => {
14:   it('should render without error', () => {
15:     const { getByText } = render(<NotesScreen />);
16:     expect(getByText('Mock NotesScreen')).toBeDefined();
17:   });
18: });
````

## File: src/screens/Protocols/ProtocolListScreen.test.tsx
````typescript
 1: import React from 'react';
 2: import { render } from '@testing-library/react-native';
 3: import ProtocolListScreen from './ProtocolListScreen';
 4: import { Text } from 'react-native';
 5: jest.mock('./ProtocolListScreen', () => {
 6:   const MockProtocolListScreen = () => <Text>Mock ProtocolListScreen</Text>;
 7:   MockProtocolListScreen.displayName = 'ProtocolListScreen';
 8:   return {
 9:     __esModule: true,
10:     default: (props: any) => <MockProtocolListScreen {...props} />,
11:   };
12: });
13: describe('ProtocolListScreen', () => {
14:   it('should render without error', () => {
15:     const { getByText } = render(<ProtocolListScreen />);
16:     expect(getByText('Mock ProtocolListScreen')).toBeDefined();
17:   });
18: });
````

## File: src/screens/Reminders/CreateEditReminderScreen.test.tsx
````typescript
 1: import React from 'react';
 2: import { render } from '@testing-library/react-native';
 3: import CreateEditReminderScreen from './CreateEditReminderScreen';
 4: import { Text } from 'react-native';
 5: jest.mock('./CreateEditReminderScreen', () => {
 6:   const MockCreateEditReminderScreen = () => <Text>Mock CreateEditReminderScreen</Text>;
 7:   MockCreateEditReminderScreen.displayName = 'CreateEditReminderScreen';
 8:   return {
 9:     __esModule: true,
10:     default: (props: any) => <MockCreateEditReminderScreen {...props} />,
11:   };
12: });
13: describe('CreateEditReminderScreen', () => {
14:   it('should render without error', () => {
15:     const { getByText } = render(<CreateEditReminderScreen />);
16:     expect(getByText('Mock CreateEditReminderScreen')).toBeDefined();
17:   });
18: });
````

## File: src/screens/Reminders/ReminderListScreen.test.tsx
````typescript
 1: import React from 'react';
 2: import { render } from '@testing-library/react-native';
 3: import ReminderListScreen from './ReminderListScreen';
 4: import { Text } from 'react-native';
 5: jest.mock('./ReminderListScreen', () => {
 6:   const MockReminderListScreen = () => <Text>Mock ReminderListScreen</Text>;
 7:   MockReminderListScreen.displayName = 'ReminderListScreen';
 8:   return {
 9:     __esModule: true,
10:     default: (props: any) => <MockReminderListScreen {...props} />,
11:   };
12: });
13: describe('ReminderListScreen', () => {
14:   it('should render without error', () => {
15:     const { getByText } = render(<ReminderListScreen />);
16:     expect(getByText('Mock ReminderListScreen')).toBeDefined();
17:   });
18: });
````

## File: src/screens/Settings/SettingsScreen.test.tsx
````typescript
1: import React from 'react';
2: import { render } from '@testing-library/react-native';
3: import SettingsScreen from './SettingsScreen';
4: describe('SettingsScreen', () => {
5:   it('should render without error', () => {
6:     const { getByTestId } = render(<SettingsScreen />);
7:     expect(getByTestId('settings-screen')).toBeDefined();
8:   });
9: });
````

## File: src/screens/ForgotPasswordScreen.test.tsx
````typescript
 1: import React from 'react';
 2: import { render } from '@testing-library/react-native';
 3: import ForgotPasswordScreen from './ForgotPasswordScreen';
 4: import { Text } from 'react-native';
 5: jest.mock('./ForgotPasswordScreen', () => {
 6:   const MockForgotPasswordScreen = () => <Text>Mock ForgotPasswordScreen</Text>;
 7:   MockForgotPasswordScreen.displayName = 'ForgotPasswordScreen';
 8:   return {
 9:     __esModule: true,
10:     default: (props: any) => <MockForgotPasswordScreen {...props} />,
11:   };
12: });
13: describe('ForgotPasswordScreen', () => {
14:   it('should render without error', () => {
15:     const { getByText } = render(<ForgotPasswordScreen />);
16:     expect(getByText('Mock ForgotPasswordScreen')).toBeDefined();
17:   });
18: });
````

## File: src/screens/HomeScreen.test.tsx
````typescript
1: import React from 'react';
2: import { render } from '@testing-library/react-native';
3: import HomeScreen from './HomeScreen';
4: describe('HomeScreen', () => {
5:   it('should render without error', () => {
6:     const { getByTestId } = render(<HomeScreen />);
7:     expect(getByTestId('home-screen')).toBeDefined();
8:   });
9: });
````

## File: src/screens/LoginScreen.test.tsx
````typescript
1: import React from 'react';
2: import { render } from '@testing-library/react-native';
3: import LoginScreen from './LoginScreen';
4: describe('LoginScreen', () => {
5:   it('should render without error', () => {
6:     const { getByTestId } = render(<LoginScreen />);
7:     expect(getByTestId('login-screen')).toBeDefined();
8:   });
9: });
````

## File: src/screens/PremiumScreen.test.tsx
````typescript
1: import React from 'react';
2: import { render } from '@testing-library/react-native';
3: import PremiumScreen from './PremiumScreen';
4: describe('PremiumScreen', () => {
5:   it('should render without error', () => {
6:     const { getByTestId } = render(<PremiumScreen />);
7:     expect(getByTestId('premium-screen')).toBeDefined();
8:   });
9: });
````

## File: src/screens/RegisterScreen.test.tsx
````typescript
 1: import React from 'react';
 2: import { render } from '@testing-library/react-native';
 3: import RegisterScreen from './RegisterScreen';
 4: const mockNavigation = {
 5:   navigate: jest.fn(),
 6: };
 7: describe('RegisterScreen', () => {
 8:   it('should render without error', () => {
 9:     const { getByTestId } = render(<RegisterScreen navigation={mockNavigation} />);
10:     expect(getByTestId('register-screen')).toBeDefined();
11:   });
12: });
````

## File: src/screens/SignupScreen.test.tsx
````typescript
1: import React from 'react';
2: import { render } from '@testing-library/react-native';
3: import SignupScreen from './SignupScreen';
4: describe('SignupScreen', () => {
5:   it('should render without error', () => {
6:     const { getByTestId } = render(<SignupScreen />);
7:     expect(getByTestId('signup-screen')).toBeDefined();
8:   });
9: });
````

## File: src/types/note.ts
````typescript
1: export interface Note {
2:     id: string;
3:     userId: string;
4:     title: string;
5:     content: string;
6:     createdAt: string;
7:     updatedAt: string;
8:   }
````

## File: .clinerules
````
 1: **Huberman App Project: Cline Workspace Interaction Rules (Updated)**
 2: 
 3: **Preamble:** These rules govern the interaction between the User and Cline for implementing both frontend and backend components of the Huberman App. The goal is to ensure development follows project documentation, proceeds methodically, and maintains accurate implementation tracking.
 4: 
 5: **Core Principles:**
 6: 
 7: 1. **Documentation is Sovereign:** All implementations must align with:
 8:    - Backend: `api_design_documentation.md`, `database_plan.md`, `security_plan.md`
 9:    - Frontend: `frontend_implementation_todo.md`, `ui_ux_handoff_integration.md`
10:    - Both: `app_description.md`, `architecture_pan.md`
11: 
12: 2. **Task Scope:**
13:    - Frontend: Reference `frontend_implementation_todo.md`
14:    - Complex tasks should be broken down into sub-items
15: 
16: 3. **Implementation Process:**
17:    - **Frontend Specific:**
18:      * Follow React Native/TypeScript best practices
19:      * Adhere to UI/UX specifications
20:      * Implement responsive designs
21:      * Include accessibility features
22:    - **Backend Specific:**
23:      * Follow API design specifications
24:      * Implement proper security measures
25:      * Maintain database schema integrity
26: 
27: 4. **Testing Requirements:**
28:    - Frontend: Component tests, UI tests
29:    - Backend: Unit tests, integration tests
30:    - Both: End-to-end tests where applicable
31: 
32: **Workflow Updates:**
33: 
34: 1. **Frontend Implementation:**
35:    - Follow phased approach from `frontend_implementation_todo.md`
36:    - Verify UI against Figma designs
37:    - Implement state management using Zustand
38:    - Handle API responses and errors appropriately
39: 
40: 2. **Cross-Team Coordination:**
41:    - Ensure API contracts are maintained
42:    - Verify feature flags and premium tiers
43:    - Coordinate push notification implementation
44: 
45: **Phase Reviews:**
46: - Include frontend-specific checks:
47:   * UI consistency
48:   * Performance metrics
49:   * Cross-platform behavior
50:   * Accessibility compliance
51: 
52: **Quality Assurance:**
53: - Frontend: Visual regression testing
54: - Backend: Load testing
55: - Both: User acceptance testing
56: 
57: **Updated Rules for 2025:**
58: 1. Support React Native 0.72+ features
59: 2. Include TypeScript strict mode checks
60: 3. Follow updated security guidelines
61: 4. Implement modern accessibility standards
62: 5. Support new iOS/Android platform requirements
````

## File: .env.local
````
1: API_BASE_URL=http://localhost:3000/api
````

## File: .env.production
````
1: API_BASE_URL=https://production.example.com/api
````

## File: .eslintrc.js
````javascript
1: module.exports = {
2:   root: true,
3:   extends: '@react-native',
4: };
````

## File: .prettierrc.js
````javascript
1: module.exports = {
2:   arrowParens: 'avoid',
3:   bracketSameLine: true,
4:   bracketSpacing: false,
5:   singleQuote: true,
6:   trailingComma: 'all',
7: };
````

## File: .watchmanconfig
````
1: {}
````

## File: babel.config.js
````javascript
1: module.exports = {
2:   presets: ['module:@react-native/babel-preset'],
3: };
````

## File: Gemfile
````
 1: source 'https://rubygems.org'
 2: 
 3: # You may use http://rbenv.org/ or https://rvm.io/ to install and use this version
 4: ruby ">= 2.6.10"
 5: 
 6: # Exclude problematic versions of cocoapods and activesupport that causes build failures.
 7: gem 'cocoapods', '>= 1.13', '!= 1.15.0', '!= 1.15.1'
 8: gem 'activesupport', '>= 6.1.7.5', '!= 7.1.0'
 9: gem 'xcodeproj', '< 1.26.0'
10: gem 'concurrent-ruby', '< 1.3.4'
11: 
12: # Ruby 3.4.0 has removed some libraries from the standard library.
13: gem 'bigdecimal'
14: gem 'logger'
15: gem 'benchmark'
16: gem 'mutex_m'
````

## File: jest.config.js
````javascript
1: module.exports = {
2:   preset: 'react-native',
3: };
````

## File: jest.setup.js
````javascript
 1: import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
 2: jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
 3: jest.mock('react-native-keychain', () => ({
 4:   setGenericPassword: jest.fn().mockResolvedValue(null),
 5:   getGenericPassword: jest.fn().mockResolvedValue({ username: 'username', password: 'password' }),
 6:   resetGenericPassword: jest.fn().mockResolvedValue(null),
 7: }));
 8: jest.mock('@react-native-firebase/messaging', () => ({
 9:   getToken: jest.fn().mockResolvedValue('test-token'),
10:   requestPermission: jest.fn().mockResolvedValue(true),
11:   hasPermission: jest.fn().mockResolvedValue(true),
12: }));
13: jest.mock('react-native-iap', () => ({
14:   initConnection: jest.fn().mockResolvedValue(true),
15:   getSubscriptions: jest.fn().mockResolvedValue([]),
16:   getProducts: jest.fn().mockResolvedValue([]),
17:   requestSubscription: jest.fn().mockResolvedValue(true),
18:   finishTransaction: jest.fn().mockResolvedValue(true),
19:   flushFailedPurchasesCachedAsPendingAndroid: jest.fn().mockResolvedValue(true),
20:   clearTransaction: jest.fn().mockResolvedValue(true),
21:   clearProducts: jest.fn().mockResolvedValue(true),
22:   endConnection: jest.fn().mockResolvedValue(true),
23: }));
````

## File: metro.config.js
````javascript
1: const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
2: const config = {};
3: module.exports = mergeConfig(getDefaultConfig(__dirname), config);
````

## File: README.md
````markdown
 1: This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).
 2: 
 3: # Getting Started
 4: 
 5: > **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.
 6: 
 7: ## Step 1: Start Metro
 8: 
 9: First, you will need to run **Metro**, the JavaScript build tool for React Native.
10: 
11: To start the Metro dev server, run the following command from the root of your React Native project:
12: 
13: ```sh
14: # Using npm
15: npm start
16: 
17: # OR using Yarn
18: yarn start
19: ```
20: 
21: ## Step 2: Build and run your app
22: 
23: With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:
24: 
25: ### Android
26: 
27: ```sh
28: # Using npm
29: npm run android
30: 
31: # OR using Yarn
32: yarn android
33: ```
34: 
35: ### iOS
36: 
37: For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).
38: 
39: The first time you create a new project, run the Ruby bundler to install CocoaPods itself:
40: 
41: ```sh
42: bundle install
43: ```
44: 
45: Then, and every time you update your native dependencies, run:
46: 
47: ```sh
48: bundle exec pod install
49: ```
50: 
51: For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).
52: 
53: ```sh
54: # Using npm
55: npm run ios
56: 
57: # OR using Yarn
58: yarn ios
59: ```
60: 
61: If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.
62: 
63: This is one way to run your app — you can also build it directly from Android Studio or Xcode.
64: 
65: ## Step 3: Modify your app
66: 
67: Now that you have successfully run the app, let's make changes!
68: 
69: Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).
70: 
71: When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:
72: 
73: - **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
74: - **iOS**: Press <kbd>R</kbd> in iOS Simulator.
75: 
76: ## Congratulations! :tada:
77: 
78: You've successfully run and modified your React Native App. :partying_face:
79: 
80: ### Now what?
81: 
82: - If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
83: - If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).
84: 
85: # Troubleshooting
86: 
87: If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
88: 
89: # Learn More
90: 
91: To learn more about React Native, take a look at the following resources:
92: 
93: - [React Native Website](https://reactnative.dev) - learn more about React Native.
94: - [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
95: - [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
96: - [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
97: - [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
````

## File: repomix.config.json
````json
 1: {
 2:   "input": {
 3:     "maxFileSize": 52428800
 4:   },
 5:   "output": {
 6:     "filePath": "repomix-output.md",
 7:     "style": "markdown",
 8:     "parsableStyle": false,
 9:     "fileSummary": true,
10:     "directoryStructure": true,
11:     "files": true,
12:     "removeComments": true,
13:     "removeEmptyLines": true,
14:     "compress": false,
15:     "topFilesLength": 10,
16:     "showLineNumbers": true,
17:     "copyToClipboard": true,
18:     "git": {
19:       "sortByChanges": true,
20:       "sortByChangesMaxCommits": 100
21:     }
22:   },
23:   "include": [],
24:   "ignore": {
25:     "useGitignore": true,
26:     "useDefaultPatterns": true,
27:     "customPatterns": []
28:   },
29:   "security": {
30:     "enableSecurityCheck": true
31:   },
32:   "tokenCount": {
33:     "encoding": "o200k_base"
34:   }
35: }
````

## File: android/build.gradle
````
 1: buildscript {
 2:     ext {
 3:         buildToolsVersion = "35.0.0"
 4:         minSdkVersion = 24
 5:         compileSdkVersion = 35
 6:         targetSdkVersion = 35
 7:         ndkVersion = "27.1.12297006"
 8:         kotlinVersion = "2.0.21"
 9:     }
10:     repositories {
11:         google()
12:         mavenCentral()
13:     }
14: dependencies {
15:     classpath("com.android.tools.build:gradle")
16:     classpath("com.facebook.react:react-native-gradle-plugin")
17:     classpath("org.jetbrains.kotlin:kotlin-gradle-plugin")
18:     classpath("com.google.gms:google-services:4.4.1")
19: }
20: }
21: 
22: apply plugin: "com.facebook.react.rootproject"
````

## File: android/settings.gradle
````
1: pluginManagement { includeBuild("../node_modules/@react-native/gradle-plugin") }
2: plugins { id("com.facebook.react.settings") }
3: extensions.configure(com.facebook.react.ReactSettingsExtension){ ex -> ex.autolinkLibrariesFromCommand() }
4: rootProject.name = 'hubermanAppFrontend'
5: include ':app'
6: includeBuild('../node_modules/@react-native/gradle-plugin')
7: include ':react-native-config'
8: project(':react-native-config').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-config/android')
````

## File: ios/hubermanAppFrontend/AppDelegate.swift
````swift
 1: import UIKit
 2: import React
 3: import React_RCTAppDelegate
 4: import ReactAppDependencyProvider
 5: import FirebaseCore
 6: import FirebaseMessaging
 7: @main
 8: class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate, MessagingDelegate {
 9:   var window: UIWindow?
10:   var reactNativeDelegate: ReactNativeDelegate?
11:   var reactNativeFactory: RCTReactNativeFactory?
12:   func application(
13:     _ application: UIApplication,
14:     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
15:   ) -> Bool {
16:     FirebaseApp.configure()
17:     UNUserNotificationCenter.current().delegate = self
18:     let authOptions: UNAuthorizationOptions = [.alert, .badge, .sound]
19:     UNUserNotificationCenter.current().requestAuthorization(
20:       options: authOptions,
21:       completionHandler: { _, _ in }
22:     )
23:     application.registerForRemoteNotifications()
24:     Messaging.messaging().delegate = self
25:     let delegate = ReactNativeDelegate()
26:     let factory = RCTReactNativeFactory(delegate: delegate)
27:     delegate.dependencyProvider = RCTAppDependencyProvider()
28:     reactNativeDelegate = delegate
29:     reactNativeFactory = factory
30:     window = UIWindow(frame: UIScreen.main.bounds)
31:     factory.startReactNative(
32:       withModuleName: "hubermanAppFrontend",
33:       in: window,
34:       launchOptions: launchOptions
35:     )
36:     return true
37:   }
38:   func application(_ application: UIApplication,
39:                    didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
40:     Messaging.messaging().apnsToken = deviceToken
41:   }
42:   func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
43:     print("Firebase registration token: \(String(describing: fcmToken))")
44:     let dataDict: [String: String] = ["token": fcmToken ?? ""]
45:     NotificationCenter.default.post(
46:       name: Notification.Name("FCMToken"),
47:       object: nil,
48:       userInfo: dataDict
49:     )
50:   }
51:   func userNotificationCenter(_ center: UNUserNotificationCenter,
52:                               willPresent notification: UNNotification,
53:                               withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
54:     completionHandler([[.banner, .badge, .sound]])
55:   }
56: }
57: class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
58:   override func sourceURL(for bridge: RCTBridge) -> URL? {
59:     self.bundleURL()
60:   }
61:   override func bundleURL() -> URL? {
62: #if DEBUG
63:     RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
64: #else
65:     Bundle.main.url(forResource: "main", withExtension: "jsbundle")
66: #endif
67:   }
68: }
````

## File: ios/Podfile
````
 1: # Resolve react_native_pods.rb with node to allow for hoisting
 2: require Pod::Executable.execute_command('node', ['-p',
 3:   'require.resolve(
 4:     "react-native/scripts/react_native_pods.rb",
 5:     {paths: [process.argv[1]]},
 6:   )', __dir__]).strip
 7: 
 8: platform :ios, min_ios_version_supported
 9: prepare_react_native_project!
10: 
11: linkage = ENV['USE_FRAMEWORKS']
12: if linkage != nil
13:   Pod::UI.puts "Configuring Pod with #{linkage}ally linked Frameworks".green
14:   use_frameworks! :linkage => linkage.to_sym
15: end
16: 
17: target 'hubermanAppFrontend' do
18:   config = use_native_modules!
19:   pod 'Firebase/Core' # Add Firebase Core pod
20:   pod 'FirebaseMessaging'
21: 
22:   use_react_native!(
23:     :path => config[:reactNativePath],
24:     # An absolute path to your application root.
25:     :app_path => "#{Pod::Config.instance.installation_root}/.."
26:   )
27: 
28:   post_install do |installer|
29:     # https://github.com/facebook/react-native/blob/main/packages/react-native/scripts/react_native_pods.rb#L197-L202
30:     react_native_post_install(
31:       installer,
32:       config[:reactNativePath],
33:       :mac_catalyst_enabled => false,
34:       # :ccache_enabled => true
35:     )
36:   end
37: end
````

## File: src/components/UpgradePrompt.tsx
````typescript
 1: import React from 'react';
 2: import { View, Text, StyleSheet } from 'react-native';
 3: import Button from './Button/Button';
 4: import { useTheme } from '../theme/ThemeProvider';
 5: const UpgradePrompt = () => {
 6:   const theme = useTheme();
 7:   const styles = StyleSheet.create({
 8:     container: {
 9:       padding: 20,
10:       backgroundColor: theme.colors.neutralBackground3,
11:       borderRadius: 5,
12:       marginBottom: 20,
13:     },
14:     text: {
15:       fontSize: 16,
16:       marginBottom: 10,
17:       textAlign: 'center',
18:     },
19:   });
20:   return (
21:     <View style={styles.container}>
22:       <Text style={styles.text}>Upgrade to Premium for more features!</Text>
23:       <Button
24:         title="Upgrade Now"
25:         onPress={() => {}}
26:         accessibilityLabel="Upgrade Now"
27:         accessibilityHint="Upgrade to the premium version of the app"
28:         accessibilityRole="button"
29:       />
30:     </View>
31:   );
32: };
33: export default UpgradePrompt;
````

## File: src/screens/HomeScreen.tsx
````typescript
 1: import React from 'react';
 2: import { View, Text } from 'react-native';
 3: import useAuthStore from '../store/authStore';
 4: import Button from '../components/Button/Button';
 5: const HomeScreen = () => {
 6:   const { logout } = useAuthStore();
 7:   return (
 8:     <View>
 9:       <Text>Welcome to the App!</Text>
10:       <Button
11:         title="Logout"
12:         onPress={logout}
13:         accessibilityLabel="Logout"
14:         accessibilityHint="Logout of the app"
15:         accessibilityRole="button"
16:       />
17:     </View>
18:   );
19: };
20: export default HomeScreen;
````

## File: src/services/api/notes.ts
````typescript
 1: import { API_URL } from '../../config';
 2: import { Note } from '../../types/note';
 3: import { checkNetworkStatus, handleApiError } from './auth';
 4: export const getNotes = async (userId: string): Promise<Note[]> => {
 5:   try {
 6:     checkNetworkStatus();
 7:     const response = await fetch(`${API_URL}/users/${userId}/notes`);
 8:     if (!response.ok) {
 9:       throw new Error(`HTTP error! status: ${response.status}`);
10:     }
11:     const data: Note[] = await response.json();
12:     return data;
13:   } catch (error) {
14:     console.error("Could not fetch notes:", handleApiError(error));
15:     return [];
16:   }
17: };
18: export const createNote = async (userId: string, note: Omit<Note, 'id'>): Promise<Note | null> => {
19:     try {
20:       checkNetworkStatus();
21:       const response = await fetch(`${API_URL}/users/${userId}/notes`, {
22:         method: 'POST',
23:         headers: {
24:           'Content-Type': 'application/json',
25:         },
26:         body: JSON.stringify(note),
27:       });
28:       if (!response.ok) {
29:         throw new Error(`HTTP error! status: ${response.status}`);
30:       }
31:       const data: Note = await response.json();
32:       return data;
33:     } catch (error) {
34:       console.error("Could not create note:", handleApiError(error));
35:       return null;
36:     }
37:   };
38:   export const updateNote = async (userId: string, noteId: string, note: Note): Promise<Note | null> => {
39:     try {
40:       checkNetworkStatus();
41:       const response = await fetch(`${API_URL}/users/${userId}/notes/${noteId}`, {
42:         method: 'PUT',
43:         headers: {
44:           'Content-Type': 'application/json',
45:         },
46:         body: JSON.stringify(note),
47:       });
48:       if (!response.ok) {
49:         throw new Error(`HTTP error! status: ${response.status}`);
50:       }
51:       const data: Note = await response.json();
52:       return data;
53:     } catch (error) {
54:       console.error("Could not update note:", handleApiError(error));
55:       return null;
56:     }
57:   };
58:   export const deleteNote = async (userId: string, noteId: string): Promise<boolean> => {
59:     try {
60:       checkNetworkStatus();
61:       const response = await fetch(`${API_URL}/users/${userId}/notes/${noteId}`, {
62:         method: 'DELETE',
63:       });
64:       if (!response.ok) {
65:         throw new Error(`HTTP error! status: ${response.status}`);
66:       }
67:       return true;
68:     } catch (error) {
69:       console.error("Could not delete note:", handleApiError(error));
70:       return false;
71:     }
72:   };
````

## File: src/theme/theme.ts
````typescript
  1: import { TextStyle } from 'react-native';
  2: type FontWeight = TextStyle['fontWeight'];
  3: export interface Theme {
  4:   colors: {
  5:     neutralForeground1: string;
  6:     neutralForeground2: string;
  7:     neutralForeground3: string;
  8:     neutralForeground4: string;
  9:     neutralForegroundDisabled: string;
 10:     neutralBackground1: string;
 11:     neutralBackground2: string;
 12:     neutralBackground3: string;
 13:     neutralBackground4: string;
 14:     neutralBackgroundDisabled: string;
 15:     brandForeground1: string;
 16:     brandForeground2: string;
 17:     brandForeground3: string;
 18:     brandForeground4: string;
 19:     brandBackground1: string;
 20:     brandBackground2: string;
 21:     brandBackground3: string;
 22:     brandBackground4: string;
 23:     statusDangerBackground1: string;
 24:     statusSuccessBackground1: string;
 25:     statusWarningBackground1: string;
 26:     primary: string;
 27:     secondary: string;
 28:   };
 29:   typography: {
 30:     sizes: {
 31:       caption2: number;
 32:       caption1: number;
 33:       body2: number;
 34:       body1: number;
 35:       subheading2: number;
 36:       subheading1: number;
 37:       heading2: number;
 38:       heading1: number;
 39:       display: number;
 40:     };
 41:     weights: {
 42:       regular: FontWeight;
 43:       medium: FontWeight;
 44:       semibold: FontWeight;
 45:       bold: FontWeight;
 46:     };
 47:     caption2: {
 48:       fontSize: number;
 49:       fontWeight: FontWeight;
 50:     };
 51:     caption1: {
 52:       fontSize: number;
 53:       fontWeight: FontWeight;
 54:     };
 55:     body2: {
 56:       fontSize: number;
 57:       fontWeight: FontWeight;
 58:     };
 59:     body1: {
 60:       fontSize: number;
 61:       fontWeight: FontWeight;
 62:     };
 63:     subheading2: {
 64:       fontSize: number;
 65:       fontWeight: FontWeight;
 66:     };
 67:     subheading1: {
 68:       fontSize: number;
 69:       fontWeight: FontWeight;
 70:     };
 71:     heading2: {
 72:       fontSize: number;
 73:       fontWeight: FontWeight;
 74:     };
 75:     heading1: {
 76:       fontSize: number;
 77:       fontWeight: FontWeight;
 78:     };
 79:     display: {
 80:       fontSize: number;
 81:       fontWeight: FontWeight;
 82:     };
 83:   };
 84:   spacing: {
 85:     s1: number;
 86:     s2: number;
 87:     s3: number;
 88:     s4: number;
 89:     s5: number;
 90:     s6: number;
 91:     s7: number;
 92:     s8: number;
 93:     s9: number;
 94:     s10: number;
 95:     medium: number;
 96:     large: number;
 97:   };
 98:   borderRadius: {
 99:     none: number;
100:     small: number;
101:     medium: number;
102:     large: number;
103:     xLarge: number;
104:     circle: number;
105:   };
106: }
107: const theme: Theme = {
108:   colors: {
109:     neutralForeground1: '#201F1E',
110:     neutralForeground2: '#484644',
111:     neutralForeground3: '#605E5C',
112:     neutralForeground4: '#797775',
113:     neutralForegroundDisabled: '#A19F9D',
114:     neutralBackground1: '#FFFFFF',
115:     neutralBackground2: '#F5F5F5',
116:     neutralBackground3: '#E1DFDE',
117:     neutralBackground4: '#D2D0CE',
118:     neutralBackgroundDisabled: '#E1DFDE',
119:     brandForeground1: '#0078D4',
120:     brandForeground2: '#106EBE',
121:     brandForeground3: '#005A9E',
122:     brandForeground4: '#193B5B',
123:     brandBackground1: '#0078D4',
124:     brandBackground2: '#106EBE',
125:     brandBackground3: '#005A9E',
126:     brandBackground4: '#193B5B',
127:     statusDangerBackground1: '#D13438',
128:     statusSuccessBackground1: '#107D0A',
129:     statusWarningBackground1: '#F7630C',
130:     primary: '#0078D4',
131:     secondary: '#106EBE',
132:   },
133:   typography: {
134:     sizes: {
135:       caption2: 10,
136:       caption1: 12,
137:       body2: 14,
138:       body1: 16,
139:       subheading2: 18,
140:       subheading1: 20,
141:       heading2: 24,
142:       heading1: 28,
143:       display: 32,
144:     },
145:     weights: {
146:       regular: '400' as FontWeight,
147:       medium: '500' as FontWeight,
148:       semibold: '600' as FontWeight,
149:       bold: '700' as FontWeight,
150:     },
151:     caption2: {
152:       fontSize: 10,
153:       fontWeight: '400',
154:     },
155:     caption1: {
156:       fontSize: 12,
157:       fontWeight: '400',
158:     },
159:     body2: {
160:       fontSize: 14,
161:       fontWeight: '400',
162:     },
163:     body1: {
164:       fontSize: 16,
165:       fontWeight: '400',
166:     },
167:     subheading2: {
168:       fontSize: 18,
169:       fontWeight: '600',
170:     },
171:     subheading1: {
172:       fontSize: 20,
173:       fontWeight: '600',
174:     },
175:     heading2: {
176:       fontSize: 24,
177:       fontWeight: '700',
178:     },
179:     heading1: {
180:       fontSize: 28,
181:       fontWeight: '700',
182:     },
183:     display: {
184:       fontSize: 32,
185:       fontWeight: '700',
186:     },
187:   },
188:   spacing: {
189:     s1: 4,
190:     s2: 8,
191:     s3: 12,
192:     s4: 16,
193:     s5: 20,
194:     s6: 24,
195:     s7: 28,
196:     s8: 32,
197:     s9: 36,
198:     s10: 40,
199:     medium: 4,
200:     large: 8,
201:   },
202:   borderRadius: {
203:     none: 0,
204:     small: 2,
205:     medium: 4,
206:     large: 8,
207:     xLarge: 12,
208:     circle: 999,
209:   },
210: };
211: export default theme;
````

## File: src/theme/ThemeProvider.tsx
````typescript
 1: import React, { createContext, useContext } from 'react';
 2: import { Theme } from './theme';
 3: import theme from './theme';
 4: interface ThemeContextProps {
 5:   theme: Theme;
 6: }
 7: const ThemeContext = createContext<ThemeContextProps>({
 8:   theme: theme,
 9: });
10: export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
11:   return (
12:     <ThemeContext.Provider value={{ theme }}>
13:       {children}
14:     </ThemeContext.Provider>
15:   );
16: };
17: export const useTheme = () => {
18:   return useContext(ThemeContext).theme;
19: };
````

## File: src/types/billing.ts
````typescript
 1: export interface Plan {
 2:   id: string;
 3:   name: string;
 4:   price: number;
 5:   currency: string;
 6:   interval: 'month' | 'year';
 7:   features: string[];
 8:   description: string;
 9: }
10: export interface SubscriptionStatus {
11:   status: 'active' | 'inactive' | 'expired';
12:   planId: string;
13:   currentPeriodEnd: string;
14: }
````

## File: src/config.ts
````typescript
1: export const API_URL = process.env.API_URL || 'http://localhost:3000';
````

## File: .env.staging
````
1: API_BASE_URL=https://staging.example.com/api
````

## File: .gitignore
````
 1: # OSX
 2: #
 3: .DS_Store
 4: 
 5: # Xcode
 6: #
 7: build/
 8: *.pbxuser
 9: !default.pbxuser
10: *.mode1v3
11: !default.mode1v3
12: *.mode2v3
13: !default.mode2v3
14: *.perspectivev3
15: !default.perspectivev3
16: xcuserdata
17: *.xccheckout
18: *.moved-aside
19: DerivedData
20: *.hmap
21: *.ipa
22: *.xcuserstate
23: **/.xcode.env.local
24: 
25: # Android/IntelliJ
26: #
27: build/
28: .idea
29: .gradle
30: local.properties
31: *.iml
32: *.hprof
33: .cxx/
34: *.keystore
35: !debug.keystore
36: .kotlin/
37: 
38: # node.js
39: #
40: node_modules/
41: npm-debug.log
42: yarn-error.log
43: 
44: # fastlane
45: #
46: # It is recommended to not store the screenshots in the git repo. Instead, use fastlane to re-generate the
47: # screenshots whenever they are needed.
48: # For more information about the recommended setup visit:
49: # https://docs.fastlane.tools/best-practices/source-control/
50: 
51: **/fastlane/report.xml
52: **/fastlane/Preview.html
53: **/fastlane/screenshots
54: **/fastlane/test_output
55: 
56: # Bundle artifact
57: *.jsbundle
58: 
59: # Ruby / CocoaPods
60: **/Pods/
61: /vendor/bundle/
62: 
63: # Temporary files created by Metro to check the health of the file watcher
64: .metro-health-check*
65: 
66: # testing
67: /coverage
68: 
69: # Yarn
70: .yarn/*
71: !.yarn/patches
72: !.yarn/plugins
73: !.yarn/releases
74: !.yarn/sdks
75: !.yarn/versions
76: repomix-output.xml
````

## File: app.json
````json
1: {
2:   "name": "hubermanAppFrontend",
3:   "displayName": "hubermanAppFrontend",
4:   "extraDotenv": true
5: }
````

## File: index.js
````javascript
1: import {AppRegistry} from 'react-native';
2: import App from './App';
3: import firebase from '@react-native-firebase/app';
4: firebase.initializeApp();
5: import {name as appName} from './app.json';
6: AppRegistry.registerComponent(appName, () => App);
````

## File: index.web.js
````javascript
 1: import React from 'react';
 2: import ReactDOM from 'react-dom/client';
 3: import App from './src/App';
 4: import { initializeApp } from "firebase/app";
 5: const firebaseConfig = {
 6:   apiKey: "AIzaSyB_j9o33tlMEEyUNx78UqZGAmOklihLkCg",
 7:   authDomain: "huberman-95d6d.firebaseapp.com",
 8:   projectId: "huberman-95d6d",
 9:   storageBucket: "huberman-95d6d.firebasestorage.app",
10:   messagingSenderId: "544986799642",
11:   appId: "1:544986799642:web:6ac6d3985c8a1249b8fba3"
12: };
13: const app = initializeApp(firebaseConfig);
14: const root = ReactDOM.createRoot(document.getElementById('root'));
15: root.render(
16:   <React.StrictMode>
17:     <App />
18:   </React.StrictMode>
19: );
````

## File: webpack.config.js
````javascript
 1: const path = require('path');
 2: const HtmlWebpackPlugin = require('html-webpack-plugin');
 3: const Dotenv = require('dotenv-webpack');
 4: const webpack = require('webpack');
 5: const babelLoaderConfiguration = {
 6:   test: /\.(jsx?|tsx?)$/,
 7:   include: [
 8:     path.resolve(__dirname, 'src'),
 9:     path.resolve(__dirname, 'index.web.js'),
10:     path.resolve(__dirname, 'node_modules/react-native'),
11:     path.resolve(__dirname, 'node_modules/react-native-web'),
12:     path.resolve(__dirname, 'node_modules/@react-navigation'),
13:     path.resolve(__dirname, 'node_modules/react-native-gesture-handler'),
14:     path.resolve(__dirname, 'node_modules/react-native-screens'),
15:     path.resolve(__dirname, 'node_modules/react-native-safe-area-context'),
16:     path.resolve(__dirname, 'node_modules/react-native-reanimated'),
17:     path.resolve(__dirname, 'node_modules/@expo'),
18:     path.resolve(__dirname, 'node_modules/expo-modules-core'),
19:   ],
20:   use: {
21:     loader: 'babel-loader',
22:     options: {
23:       presets: ['module:@react-native/babel-preset'],
24:       plugins: [
25:         '@babel/plugin-proposal-export-namespace-from',
26:       ],
27:     },
28:   },
29: };
30: const fontLoaderConfiguration = {
31:   test: /\.ttf$/,
32:   use: ['file-loader'],
33: };
34: const assetFileLoaderConfiguration = {
35:   test: /\.(gif|jpe?g|png|svg)$/,
36:   use: {
37:     loader: 'url-loader',
38:     options: {
39:       name: '[hash].[ext]',
40:     },
41:   },
42: };
43: module.exports = {
44:   mode: 'development',
45:   entry: path.resolve(__dirname, 'index.web.js'),
46:   output: {
47:     path: path.resolve(__dirname, 'dist'),
48:     filename: 'bundle.js',
49:   },
50:   devServer: {
51:     static: path.resolve(__dirname, 'dist'),
52:     port: 9000,
53:   },
54:   module: {
55:     rules: [
56:       babelLoaderConfiguration,
57:       assetFileLoaderConfiguration,
58:       fontLoaderConfiguration,
59:       {
60:         test: /\.css$/i,
61:         use: ["style-loader", "css-loader"],
62:       },
63:     ],
64:   },
65:   plugins: [
66:     new HtmlWebpackPlugin({
67:       template: path.resolve(__dirname, 'public/index.html'),
68:     }),
69:     new Dotenv({
70:             path: './.env.local',
71:           }),
72:           new webpack.DefinePlugin({
73:                  __DEV__: process.env.NODE_ENV === 'development',
74:                 }),
75:   ],
76:   resolve: {
77:     alias: {
78:       '@': path.resolve(__dirname, 'src/'),
79:       'react-native$': 'react-native-web',
80:       '@react-navigation/core': path.resolve(__dirname, 'node_modules/@react-navigation/core/src/index.tsx'),
81:       '@react-navigation/native': path.resolve(__dirname, 'node_modules/@react-navigation/native/src/index.tsx'),
82:       '@react-navigation/elements': path.resolve(__dirname, 'node_modules/@react-navigation/elements/src/index.tsx'),
83:       '@react-navigation/native-stack': path.resolve(__dirname, 'node_modules/@react-navigation/native-stack/src/index.tsx'),
84:       '@react-navigation/bottom-tabs': path.resolve(__dirname, 'node_modules/@react-navigation/bottom-tabs/src/index.tsx'),
85:       '@react-navigation/routers': path.resolve(__dirname, 'node_modules/@react-navigation/routers/src/index.tsx'),
86:       'react-native-gesture-handler': path.resolve(__dirname, 'node_modules/react-native-gesture-handler/src/index.ts'),
87:       'react-native-screens': path.resolve(__dirname, 'node_modules/react-native-screens/src/index.tsx'),
88:       'react-native-safe-area-context': path.resolve(__dirname, 'node_modules/react-native-safe-area-context/src/index.tsx'),
89:     },
90:     extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js', '.jsx', '.json'],
91:     mainFields: ['browser', 'module', 'main'],
92:     fullySpecified: false,
93:   },
94: };
````

## File: android/app/build.gradle
````
  1: apply plugin: "com.android.application"
  2: apply plugin: "org.jetbrains.kotlin.android"
  3: apply plugin: "com.facebook.react"
  4: apply plugin: "com.google.gms.google-services"
  5: 
  6: /**
  7:  * This is the configuration block to customize your React Native Android app.
  8:  * By default you don't need to apply any configuration, just uncomment the lines you need.
  9:  */
 10: react {
 11:     /* Folders */
 12:     //   The root of your project, i.e. where "package.json" lives. Default is '../..'
 13:     // root = file("../../")
 14:     //   The folder where the react-native NPM package is. Default is ../../node_modules/react-native
 15:     // reactNativeDir = file("../../node_modules/react-native")
 16:     //   The folder where the react-native Codegen package is. Default is ../../node_modules/@react-native/codegen
 17:     // codegenDir = file("../../node_modules/@react-native/codegen")
 18:     //   The cli.js file which is the React Native CLI entrypoint. Default is ../../node_modules/react-native/cli.js
 19:     // cliFile = file("../../node_modules/react-native/cli.js")
 20: 
 21:     /* Variants */
 22:     //   The list of variants to that are debuggable. For those we're going to
 23:     //   skip the bundling of the JS bundle and the assets. By default is just 'debug'.
 24:     //   If you add flavors like lite, prod, etc. you'll have to list your debuggableVariants.
 25:     // debuggableVariants = ["liteDebug", "prodDebug"]
 26: 
 27:     /* Bundling */
 28:     //   A list containing the node command and its flags. Default is just 'node'.
 29:     // nodeExecutableAndArgs = ["node"]
 30:     //
 31:     //   The command to run when bundling. By default is 'bundle'
 32:     // bundleCommand = "ram-bundle"
 33:     //
 34:     //   The path to the CLI configuration file. Default is empty.
 35:     // bundleConfig = file(../rn-cli.config.js)
 36:     //
 37:     //   The name of the generated asset file containing your JS bundle
 38:     // bundleAssetName = "MyApplication.android.bundle"
 39:     //
 40:     //   The entry file for bundle generation. Default is 'index.android.js' or 'index.js'
 41:     // entryFile = file("../js/MyApplication.android.js")
 42:     //
 43:     //   A list of extra flags to pass to the 'bundle' commands.
 44:     //   See https://github.com/react-native-community/cli/blob/main/docs/commands.md#bundle
 45:     // extraPackagerArgs = []
 46: 
 47:     /* Hermes Commands */
 48:     //   The hermes compiler command to run. By default it is 'hermesc'
 49:     // hermesCommand = "$rootDir/my-custom-hermesc/bin/hermesc"
 50:     //
 51:     //   The list of flags to pass to the Hermes compiler. By default is "-O", "-output-source-map"
 52:     // hermesFlags = ["-O", "-output-source-map"]
 53: 
 54:     /* Autolinking */
 55:     autolinkLibrariesWithApp()
 56: }
 57: 
 58: /**
 59:  * Set this to true to Run Proguard on Release builds to minify the Java bytecode.
 60:  */
 61: def enableProguardInReleaseBuilds = false
 62: 
 63: /**
 64:  * The preferred build flavor of JavaScriptCore (JSC)
 65:  *
 66:  * For example, to use the international variant, you can use:
 67:  * `def jscFlavor = io.github.react-native-community:jsc-android-intl:2026004.+`
 68:  *
 69:  * The international variant includes ICU i18n library and necessary data
 70:  * allowing to use e.g. `Date.toLocaleString` and `String.localeCompare` that
 71:  * give correct results when using with locales other than en-US. Note that
 72:  * this variant is about 6MiB larger per architecture than default.
 73:  */
 74: def jscFlavor = 'io.github.react-native-community:jsc-android:2026004.+'
 75: 
 76: android {
 77:     ndkVersion rootProject.ext.ndkVersion
 78:     buildToolsVersion rootProject.ext.buildToolsVersion
 79:     compileSdk rootProject.ext.compileSdkVersion
 80: 
 81:     namespace "com.hubermanappfrontend"
 82:     defaultConfig {
 83:         applicationId "com.hubermanappfrontend"
 84:         minSdkVersion rootProject.ext.minSdkVersion
 85:         targetSdkVersion rootProject.ext.targetSdkVersion
 86:         versionCode 1
 87:         versionName "1.0"
 88:     }
 89:     signingConfigs {
 90:         debug {
 91:             storeFile file('debug.keystore')
 92:             storePassword 'android'
 93:             keyAlias 'androiddebugkey'
 94:             keyPassword 'android'
 95:         }
 96:     }
 97:     buildTypes {
 98:         debug {
 99:             signingConfig signingConfigs.debug
100:         }
101:         release {
102:             // Caution! In production, you need to generate your own keystore file.
103:             // see https://reactnative.dev/docs/signed-apk-android.
104:             signingConfig signingConfigs.debug
105:             minifyEnabled enableProguardInReleaseBuilds
106:             proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
107:         }
108:     }
109: }
110: 
111: dependencies {
112:     // The version of react-native is set by the React Native Gradle Plugin
113:     implementation("com.facebook.react:react-android")
114: 
115:     implementation platform('com.google.firebase:firebase-bom:32.8.0')
116:     implementation 'com.google.firebase:firebase-messaging-ktx'
117: 
118:     if (hermesEnabled.toBoolean()) {
119:         implementation("com.facebook.react:hermes-android")
120:     } else {
121:         implementation jscFlavor
122:     }
123: }
````

## File: src/navigation/AuthStack.tsx
````typescript
 1: import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
 2: import React from 'react';
 3: import LoginScreen from '../screens/LoginScreen';
 4: import SignupScreen from '../screens/SignupScreen';
 5: import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
 6: export type AuthStackParamList = {
 7:   Login: undefined;
 8:   Signup: undefined;
 9:   ForgotPassword: undefined;
10: };
11: export type AuthStackNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
12: const Stack = createNativeStackNavigator<AuthStackParamList>();
13: const AuthStack = () => {
14:   return (
15:     <Stack.Navigator screenOptions={{ headerShown: false }}>
16:       <Stack.Screen name="Login" component={LoginScreen} />
17:       <Stack.Screen name="Signup" component={SignupScreen} />
18:       <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
19:     </Stack.Navigator>
20:   );
21: };
22: export default AuthStack;
````

## File: src/navigation/RootNavigator.tsx
````typescript
 1: import { createNativeStackNavigator } from '@react-navigation/native-stack';
 2: import React, { useEffect, useState } from 'react';
 3: import { NavigationContainer } from '@react-navigation/native';
 4: import useAuthStore from '@/store/authStore';
 5: import AuthStack from './AuthStack';
 6: import AppStack from './AppStack';
 7: const Stack = createNativeStackNavigator();
 8: const RootNavigator = () => {
 9:   const { isAuthenticated, loadToken } = useAuthStore();
10:   const [loading, setLoading] = useState(true);
11:   useEffect(() => {
12:     const load = async () => {
13:       await loadToken();
14:       setLoading(false);
15:     };
16:     load();
17:   }, [loadToken]);
18:   if (loading) {
19:     return null;
20:   }
21:   return (
22:     <NavigationContainer>
23:       <Stack.Navigator screenOptions={{ headerShown: false }}>
24:         {isAuthenticated ? (
25:           <Stack.Screen name="App" component={AppStack} />
26:         ) : (
27:           <Stack.Screen name="Auth" component={AuthStack} />
28:         )}
29:       </Stack.Navigator>
30:     </NavigationContainer>
31:   );
32: };
33: export default RootNavigator;
````

## File: src/screens/PremiumScreen.tsx
````typescript
  1: import React, { useEffect, useState } from 'react';
  2: import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Alert, Platform } from 'react-native';
  3: import { fetchPlans } from '../services/api/billing';
  4: import { Plan } from '../types/billing';
  5: import * as RNIap from 'react-native-iap';
  6: import Button from '../components/Button/Button';
  7: import Card from '../components/Card';
  8: const itemSkus = Platform.select({
  9:   ios: [
 10:     'premium_monthly',
 11:     'premium_annual',
 12:   ],
 13:   android: [
 14:     'premium_monthly',
 15:     'premium_annual',
 16:   ],
 17:   default: [],
 18: });
 19: const PremiumScreen: React.FC = () => {
 20:   const [plans, setPlans] = useState<Plan[]>([]);
 21:   const [loading, setLoading] = useState(true);
 22:   const [products, setProducts] = useState<RNIap.Product[]>([]);
 23:   useEffect(() => {
 24:     const initializeIap = async () => {
 25:       try {
 26:         await RNIap.initConnection();
 27:         const availableProducts = await RNIap.getProducts({ skus: itemSkus });
 28:         setProducts(availableProducts);
 29:       } catch (err: any) {
 30:         console.warn(err);
 31:         Alert.alert('IAP Error', err.message);
 32:       } finally {
 33:         setLoading(false);
 34:       }
 35:     };
 36:     const loadPlans = async () => {
 37:       try {
 38:         const fetchedPlans = await fetchPlans();
 39:         setPlans(fetchedPlans);
 40:       } catch (error) {
 41:         console.error('Failed to fetch plans:', error);
 42:         Alert.alert('Error', 'Failed to load subscription plans.');
 43:       }
 44:     };
 45:     initializeIap();
 46:     loadPlans();
 47:     return () => {
 48:       RNIap.endConnection();
 49:     };
 50:   }, []);
 51:   const requestSubscription = async (sku: string) => {
 52:     try {
 53:       await RNIap.requestSubscription({ sku });
 54:       Alert.alert('Purchase Initiated', 'Your purchase is being processed. Your subscription status will update shortly.');
 55:     } catch (err: any) {
 56:       console.warn(err);
 57:       Alert.alert('Purchase Error', err.message);
 58:     }
 59:   };
 60:   if (loading) {
 61:     return (
 62:       <View style={styles.centered}>
 63:         <ActivityIndicator size="large" />
 64:       </View>
 65:     );
 66:   }
 67:   return (
 68:     <ScrollView style={styles.container}>
 69:       <Text style={styles.title}>Go Premium</Text>
 70:       <Text style={styles.description}>Unlock all features with a premium subscription.</Text>
 71:       {}
 72:       {plans.map((plan) => {
 73:         const product = products.find(p => p.productId === plan.id);
 74:         if (!product) return null;
 75:         return (
 76:           <Card key={plan.id} style={styles.planCard}>
 77:             <Text style={styles.planName}>{plan.name}</Text>
 78:             <Text style={styles.planPrice}>{product.localizedPrice}</Text>
 79:             <Text style={styles.planDescription}>{plan.description}</Text>
 80:             <Button
 81:               title={`Subscribe to ${plan.name}`}
 82:               onPress={() => requestSubscription(product.productId)}
 83:               accessibilityLabel={`Subscribe to ${plan.name}`}
 84:               accessibilityHint={`Subscribe to the ${plan.name} plan`}
 85:               accessibilityRole="button"
 86:             />
 87:           </Card>
 88:         );
 89:       })}
 90:     </ScrollView>
 91:   );
 92: };
 93: const styles = StyleSheet.create({
 94:   container: {
 95:     flex: 1,
 96:     padding: 20,
 97:   },
 98:   centered: {
 99:     flex: 1,
100:     justifyContent: 'center',
101:     alignItems: 'center',
102:   },
103:   title: {
104:     fontSize: 24,
105:     fontWeight: 'bold',
106:     marginBottom: 10,
107:     textAlign: 'center',
108:   },
109:   description: {
110:     fontSize: 16,
111:     marginBottom: 20,
112:     textAlign: 'center',
113:     color: '#666',
114:   },
115:   planCard: {
116:     backgroundColor: '#f9f9f9',
117:     padding: 15,
118:     borderRadius: 8,
119:     marginBottom: 15,
120:     alignItems: 'center',
121:   },
122:   planName: {
123:     fontSize: 18,
124:     fontWeight: 'bold',
125:     marginBottom: 5,
126:   },
127:   planPrice: {
128:     fontSize: 16,
129:     color: 'green',
130:     marginBottom: 10,
131:   },
132:   planDescription: {
133:     fontSize: 14,
134:     color: '#555',
135:     marginBottom: 15,
136:     textAlign: 'center',
137:   },
138: });
139: export default PremiumScreen;
````

## File: src/screens/RegisterScreen.tsx
````typescript
  1: import React, { useState } from 'react';
  2: import { View, Text, StyleSheet, Alert } from 'react-native';
  3: import CustomTextInput from '../components/TextInput';
  4: import Button from '../components/Button/Button';
  5: import useAuthStore from '../store/authStore';
  6: import { useTheme } from '../theme/ThemeProvider';
  7: interface RegisterScreenProps {
  8:   navigation: any;
  9: }
 10: const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
 11:   const register = useAuthStore((state) => state.register);
 12:   const [name, setName] = useState('');
 13:   const [email, setEmail] = useState('');
 14:   const [password, setPassword] = useState('');
 15:   const [loading, setLoading] = useState(false);
 16:   const theme = useTheme();
 17:   const handleRegister = async () => {
 18:     if (!email || !password) {
 19:       Alert.alert('Error', 'Please fill all fields');
 20:       return;
 21:     }
 22:     setLoading(true);
 23:     try {
 24:       await register(email, password, name);
 25:       navigation.navigate('Home');
 26:     } catch (error) {
 27:       Alert.alert('Error', 'Registration failed');
 28:     } finally {
 29:       setLoading(false);
 30:     }
 31:   };
 32:   const styles = StyleSheet.create({
 33:     container: {
 34:       flex: 1,
 35:       padding: 20,
 36:       justifyContent: 'center',
 37:       backgroundColor: theme.colors.neutralBackground1,
 38:     },
 39:     title: {
 40:       fontSize: 24,
 41:       marginBottom: 20,
 42:       textAlign: 'center',
 43:       color: theme.colors.neutralForeground1,
 44:     },
 45:     input: {
 46:       height: 50,
 47:       borderColor: theme.colors.neutralForeground3,
 48:       borderWidth: 1,
 49:       marginBottom: 15,
 50:       paddingHorizontal: 15,
 51:       borderRadius: 5,
 52:       fontSize: 16,
 53:       color: theme.colors.neutralForeground1,
 54:     },
 55:     errorText: {
 56:       color: theme.colors.statusDangerBackground1,
 57:       marginTop: 12,
 58:       textAlign: 'center',
 59:     },
 60:   });
 61:   return (
 62:     <View style={styles.container}>
 63:       <Text style={styles.title}>Create Account</Text>
 64:       <CustomTextInput
 65:         style={styles.input}
 66:         placeholder="Name"
 67:         value={name}
 68:         onChangeText={setName}
 69:         autoCapitalize="words"
 70:         accessibilityLabel="Name"
 71:         accessibilityHint="Enter your name"
 72:       />
 73:       <CustomTextInput
 74:         style={styles.input}
 75:         placeholder="Email"
 76:         value={email}
 77:         onChangeText={setEmail}
 78:         keyboardType="email-address"
 79:         autoCapitalize="none"
 80:         accessibilityLabel="Email address"
 81:         accessibilityHint="Enter your email address"
 82:       />
 83:       <CustomTextInput
 84:         style={styles.input}
 85:         placeholder="Password"
 86:         value={password}
 87:         onChangeText={setPassword}
 88:         secureTextEntry
 89:         accessibilityLabel="Password"
 90:         accessibilityHint="Enter your password"
 91:         autoCapitalize="none"
 92:       />
 93:       <Button
 94:         title={loading ? 'Loading...' : 'Register'}
 95:         onPress={handleRegister}
 96:         disabled={loading}
 97:         accessibilityLabel='Register'
 98:         accessibilityHint='Create a new account'
 99:         accessibilityRole='button'
100:       />
101:     </View>
102:   );
103: };
104: export default RegisterScreen;
````

## File: src/services/api/auth.ts
````typescript
 1: import axios from 'axios';
 2: import { API_URL } from '../../config';
 3: export const checkNetworkStatus = () => {
 4:   console.log('Checking network status...');
 5: };
 6: export const handleApiError = (error: any): string => {
 7:   if (axios.isAxiosError(error)) {
 8:     return error.response?.data?.message || error.message || 'An unexpected error occurred.';
 9:   } else {
10:     return String(error);
11:   }
12: };
13: export const register = async (userData: {
14:   email: string;
15:   password: string;
16:   name?: string;
17: }) => {
18:   try {
19:     checkNetworkStatus();
20:     const response = await axios.post(`${API_URL}/register`, userData);
21:     return response.data;
22:   } catch (error) {
23:     throw new Error(handleApiError(error));
24:   }
25: };
26: export const login = async (credentials: {
27:   email: string;
28:   password: string;
29: }) => {
30:   try {
31:     checkNetworkStatus();
32:     const response = await axios.post(`${API_URL}/login`, credentials);
33:     return response.data;
34:   } catch (error) {
35:     throw new Error(handleApiError(error));
36:   }
37: };
38: export const logout = async () => {
39:   try {
40:     checkNetworkStatus();
41:     const response = await axios.post(`${API_URL}/logout`);
42:     return response.data;
43:   } catch (error) {
44:     throw new Error(handleApiError(error));
45:   }
46: };
47: export const forgotPassword = async (email: string) => {
48:   try {
49:     checkNetworkStatus();
50:     const response = await axios.post(`${API_URL}/forgot-password`, { email });
51:     return response.data;
52:   } catch (error) {
53:     throw new Error(handleApiError(error));
54:   }
55: }
56: export const resetPassword = async (token: string, newPassword: string) => {
57:   try {
58:     checkNetworkStatus();
59:     const response = await axios.post(`${API_URL}/reset-password`, {
60:       token,
61:       newPassword
62:     });
63:     return response.data;
64:   } catch (error) {
65:     throw new Error(handleApiError(error));
66:   }
67: };
````

## File: src/services/api/billing.ts
````typescript
 1: import axios from 'axios';
 2: import { API_URL } from '../../config';
 3: import { Plan, SubscriptionStatus } from '../../types/billing';
 4: import { checkNetworkStatus, handleApiError } from './auth';
 5: export const fetchPlans = async (): Promise<Plan[]> => {
 6:   try {
 7:     checkNetworkStatus();
 8:     const response = await axios.get(`${API_URL}/plans`);
 9:     return response.data;
10:   } catch (error) {
11:     console.error('Error fetching plans:', handleApiError(error));
12:     throw new Error(handleApiError(error));
13:   }
14: };
15: export const fetchSubscriptionStatus = async (userId: string): Promise<SubscriptionStatus> => {
16:   try {
17:     checkNetworkStatus();
18:     const response = await axios.get(`${API_URL}/user/subscription`, {
19:       params: { userId }
20:     });
21:     return response.data;
22:   } catch (error) {
23:     console.error('Error fetching subscription status:', handleApiError(error));
24:     throw new Error(handleApiError(error));
25:   }
26: };
````

## File: src/services/api/reminders.ts
````typescript
 1: import axios from 'axios';
 2: import { API_URL } from '../../config';
 3: import { checkNetworkStatus, handleApiError } from './auth';
 4: export interface Reminder {
 5:   id: string;
 6:   protocolId: string;
 7:   time: string;
 8:   userId: string;
 9: }
10: export const fetchReminders = async (userId: string): Promise<Reminder[]> => {
11:   try {
12:     checkNetworkStatus();
13:     const response = await axios.get(`${API_URL}/reminders?userId=${userId}`);
14:     return response.data;
15:   } catch (error) {
16:     throw new Error(handleApiError(error));
17:   }
18: };
19: export const createReminder = async (reminder: Omit<Reminder, 'id'>): Promise<Reminder> => {
20:   try {
21:     checkNetworkStatus();
22:     const response = await axios.post(`${API_URL}/reminders`, reminder);
23:     return response.data;
24:   } catch (error) {
25:     throw new Error(handleApiError(error));
26:   }
27: };
28: export const updateReminder = async (id: string, reminder: Omit<Reminder, 'id'>): Promise<Reminder> => {
29:   try {
30:     checkNetworkStatus();
31:     const response = await axios.put(`${API_URL}/reminders/${id}`, reminder);
32:     return response.data;
33:   } catch (error) {
34:     throw new Error(handleApiError(error));
35:   }
36: };
37: export const deleteReminder = async (id: string): Promise<void> => {
38:   try {
39:     checkNetworkStatus();
40:     await axios.delete(`${API_URL}/reminders/${id}`);
41:   } catch (error) {
42:     throw new Error(handleApiError(error));
43:   }
44: };
````

## File: src/services/api/user.ts
````typescript
 1: import axios from 'axios';
 2: import { API_URL } from '../../config';
 3: import { checkNetworkStatus, handleApiError } from './auth';
 4: export const sendDeviceToken = async (token: string) => {
 5:   try {
 6:     checkNetworkStatus();
 7:     const response = await axios.post(`${API_URL}/user/device-token`, {
 8:       token,
 9:     });
10:     return response.data;
11:   } catch (error) {
12:     console.error('Error sending device token:', handleApiError(error));
13:     throw new Error(handleApiError(error));
14:   }
15: };
````

## File: tsconfig.json
````json
 1: {
 2:   "compilerOptions": {
 3:     "allowJs": true,
 4:     "allowSyntheticDefaultImports": true,
 5:     "esModuleInterop": true,
 6:     "isolatedModules": true,
 7:     "jsx": "react-native",
 8:     "lib": ["es6"],
 9:     "moduleResolution": "node",
10:     "noEmit": true,
11:     "strict": true,
12:     "target": "esnext",
13:     "baseUrl": ".",
14:     "paths": {
15:       "@/*": ["src/*"]
16:     }
17:   },
18:   "include": ["src/**/*", "node_modules/@expo/vector-icons"],
19:   "exclude": [
20:     "node_modules",
21:     "babel.config.js",
22:     "metro.config.js",
23:     "jest.config.js"
24:   ]
25: }
````

## File: app_documentation/refinement_todo.md
````markdown
 1: Okay, I have meticulously reviewed the provided frontend codebase (`repomix-output.xml`) against the `frontend_implementation_todo.md` checklist.
 2: 
 3: **Verification Summary:**
 4: 
 5: Overall, significant progress has been made, and many core features outlined in the checklist have corresponding implementations. However, several gaps and areas requiring refinement exist, particularly concerning API integration details within state management, missing tests, incomplete UI connections, and handling edge cases like network errors.
 6: 
 7: **Detailed Checklist Verification:**
 8: 
 9: *   **Phase 1 (Setup):** **Mostly Complete.** Core structure, dependencies, tooling (Lint, Prettier, TS), theme, and root navigation are set up. Foundational Button component exists. Minor points: explicit `TextInput`, `Card`, `ScreenWrapper` components were not created (native ones used), Storybook setup wasn't verified (optional).
10: *   **Phase 2 (Auth):** **Mostly Complete.** Screens, API service functions, and the basic `authStore` structure are implemented. Keychain logic is present. **Gaps:** `authStore` uses placeholder `fetch` instead of the implemented `axios` services (`login`, `register`, `logout`). User profile data (`isPremium`) population from actual API response needs integration. Component tests are missing.
11: *   **Phase 3 (Content):** **Mostly Complete.** Navigation, screens (Protocols List/Detail, Settings shell, Notes placeholder), and content API services are implemented. Premium indicators are present. **Gaps:** Conditional rendering in `ProtocolDetailScreen` uses a frontend check (`user.isPremium`) *in addition to* sending a flag to the API; ensure this aligns with the final API design (API should ideally return only allowed content). Visual prompts for upgrade might need refinement.
12: *   **Phase 4 (Subscription):** **Partially Complete.** IAP library installed, API services exist, Premium screen built, `billingStore` exists. **Gaps:** Critical link missing to update `authStore.user.isPremium` based on `billingStore` status. External configuration (App/Play Store products, native IAP setup) needs verification. Frontend handling of purchase validation relies correctly on backend webhooks, but robust refresh logic after purchase needs thorough testing.
13: *   **Phase 5 (Premium MVP):** **Partially Complete.** Premium content display logic exists in `ProtocolDetailScreen`. Reminder screens and API service exist. Premium checks exist. **Gaps:** Navigation *to* the Create/Edit Reminder screen is not implemented in the UI (e.g., button press handlers are empty or missing).
14: *   **Phase 6 (Push Notifications):** **Mostly Complete.** Firebase libraries installed, native setup seems present, token request/sending logic implemented, basic listeners are in `App.tsx`. **Gaps:** External Firebase project setup and config file integration need verification.
15: *   **Phase 7 (Refinement):** **Partially Complete.** Basic styling, loading/empty states, and some accessibility props are present. **Gaps:** Network connectivity handling, comprehensive testing (Component, E2E), full accessibility review, and performance optimization are missing.
16: *   **Phase 8 & 9 (Build/Launch):** **Incomplete.** These are external process steps, marked as TODO.
17: 
18: ---
19: 
20: **New TODO List for Production Readiness (Frontend):**
21: 
22: This list incorporates the identified gaps and areas needing further work to achieve a production-ready state.
23: 1. API Integration & State Management (Code Logic):
24: [x] Refactor authStore API Calls: Modify login, register, logout actions in src/store/authStore.ts to use the implemented axios functions from src/services/api/auth.ts. Ensure correct API endpoint usage and error handling logic within the store actions.
25: [x] Implement User Profile Update Logic: Write the code within authStore to correctly process API responses after login/register and update the user state, including the isPremium flag based on the data received.
26: [x] Code billingStore to authStore Link: Implement the code structure (e.g., using Zustand's subscribe mechanism or effects within components) to trigger an update in authStore when billingStore's subscription status changes.
27: [x] Code Subscription Refresh Logic: Implement the code for fetching subscription status in billingStore, including error handling. Define the triggering mechanism (e.g., app focus event listener code structure, though the actual trigger won't be tested here).
28: 2. UI Implementation & Navigation (Code Structure):
29: [x] Implement Reminder Navigation Code: Add the necessary navigation.navigate(...) calls with correct parameters within ReminderListScreen and potentially ProtocolDetailScreen to link to the CreateEditReminderScreen.
30: [x] Implement Notes Feature Code: Develop the NotesScreen.tsx component structure, related sub-components (e.g., NoteItem), API service calls (src/services/api/notes.ts - Needs Implementation), and state management logic for Note CRUD operations. Implement logic to check authStore for user ID.
31: [x] Code Upgrade Prompts: Add the conditional rendering logic ({user.isPremium ? <PremiumFeature /> : <UpgradePrompt />}) and basic UpgradePrompt component structure in relevant screens (e.g., ProtocolDetail, ReminderList).
32: [x] Code Missing Base Components: Create the TSX files and basic structure for TextInput, Card, ScreenWrapper components in src/components/ based on Fluent UI design principles described in documentation, if required by final UI specifications.
33: 3. Error Handling & Edge Cases (Code Logic):
34: [x] Code Network Error Handling Structure: Add try...catch blocks around API calls. Implement basic structure for checking network status (e.g., placeholder function call checkNetworkStatus()) and conditional logic to handle offline scenarios within service functions or components.
35: [x] Standardize API Error Handling Code: Review API call sites (.catch blocks) and implement consistent logic for extracting error messages and updating component/store state to reflect errors. Define helper functions if needed.
36: 4. Testing Preparation (Code Setup):
37: [x] Write Test File Structure: Create the necessary *.test.tsx files for major screens and components. Add basic Jest describe and it blocks as placeholders for future test implementation.
38: [x] Set up Mocking: Configure Jest setup files (jest.setup.js if needed) to mock native modules (react-native-keychain, @react-native-firebase/messaging, react-native-iap) and potentially global fetch/axios for predictable testing later.
39: 5. Refinement & Productionization (Code Review & Setup):
40: [x] Accessibility (A11y) Props: Review component code and add missing accessibilityLabel, accessibilityHint, accessibilityRole props to all interactive elements based on their function.
41: [x] Performance Code Review: Statically review code for potential performance issues (e.g., unnecessary re-renders, large list rendering without optimization like FlatList, heavy computations on the main thread). Add comments (// TODO: Optimize) for areas needing profiling later.
42: [x] Static Styling & Design Review: Compare component code styles (StyleSheet.create) against Figma specifications or the defined theme (src/theme/theme.ts). Ensure consistent use of theme variables (colors, spacing, typography). This is a static code review, not a visual check.
43: [ ] Code Cleanup: Remove console.log statements, commented-out code blocks, and unused variables/imports. Ensure consistent code formatting (run Prettier). Add clarifying code comments where logic is complex.
44: [ ] Integrate Crash Reporting SDK: Add the necessary initialization code for Sentry/Bugsnag SDK (e.g., in App.tsx or entry point) according to their documentation.
45: 6. Build & Deployment Configuration:
46: [ ] Configure App Icons & Splash Screen Assets: Place correctly named and sized image assets in the appropriate native directories (android/app/src/main/res/mipmap-*, ios/hubermanAppFrontend/Images.xcassets). Does not include configuring the build system to use them yet.
47: [ ] Review Build Configuration Files: Check native configuration files (build.gradle, Info.plist, Podfile) for placeholders related to bundle IDs, versioning, or signing and add comments (<!-- TODO: Update for Release --> or similar) for required changes later.
48: [ ] Set up Environment Variable Config: Ensure react-native-config is correctly set up and .env.staging, .env.production files exist with appropriate API URL placeholders.
49: 7. External Configuration Planning:
50: [ ] Document IAP Product IDs: Create or update a document listing the exact Product IDs (premium_monthly, premium_annual) intended for use in App Store Connect and Google Play Console, ensuring consistency with PremiumScreen.tsx code.
51: [ ] Document Firebase Config Requirements: Note the requirement for obtaining GoogleService-Info.plist and google-services.json files from the Firebase project and where they should be placed in the ios and android directories.
````

## File: src/components/Button/Button.tsx
````typescript
 1: import React from 'react';
 2: import { TouchableOpacity, Text, StyleSheet } from 'react-native';
 3: import { useTheme } from '../../theme/ThemeProvider';
 4: interface ButtonProps {
 5:   title: string;
 6:   onPress: () => void;
 7:   variant?: 'primary' | 'secondary' | 'outline';
 8:   disabled?: boolean;
 9:   accessibilityLabel?: string;
10:   accessibilityHint?: string;
11:   accessibilityRole?: 'button' | 'link' | 'header' | 'summary' | 'image' | 'adjustable' | 'none';
12: }
13: const Button: React.FC<ButtonProps> = ({
14:   title,
15:   onPress,
16:   variant = 'primary',
17:   disabled = false,
18:   accessibilityLabel,
19:   accessibilityHint,
20: }) => {
21:   const theme = useTheme();
22:   const styles = StyleSheet.create({
23:     button: {
24:       paddingVertical: theme.spacing.medium,
25:       paddingHorizontal: theme.spacing.large,
26:       borderRadius: theme.borderRadius.medium,
27:       alignItems: 'center',
28:       justifyContent: 'center',
29:     },
30:     text: {
31:       fontSize: theme.typography.body1.fontSize,
32:       fontWeight: theme.typography.weights.semibold,
33:     },
34:     disabled: {
35:       opacity: 0.6,
36:     },
37:   });
38:   const getButtonStyle = () => {
39:     switch (variant) {
40:       case 'secondary':
41:         return {
42:           backgroundColor: theme.colors.secondary,
43:         };
44:       case 'outline':
45:         return {
46:           backgroundColor: 'transparent',
47:           borderWidth: 1,
48:           borderColor: theme.colors.primary,
49:         };
50:       default:
51:         return {
52:           backgroundColor: theme.colors.primary,
53:         };
54:     }
55:   };
56:   const getTextStyle = () => {
57:     switch (variant) {
58:       case 'outline':
59:         return {
60:           color: theme.colors.primary,
61:         };
62:       default:
63:         return {
64:           color: theme.colors.neutralBackground1,
65:         };
66:     }
67:   };
68:   return (
69:     <TouchableOpacity
70:       style={[
71:         styles.button,
72:         getButtonStyle(),
73:         disabled && styles.disabled,
74:       ]}
75:       onPress={onPress}
76:       disabled={disabled}
77:       activeOpacity={0.8}
78:       accessibilityLabel={accessibilityLabel}
79:       accessibilityHint={accessibilityHint}
80:     >
81:       <Text style={[styles.text, getTextStyle()]}>{title}</Text>
82:     </TouchableOpacity>
83:   );
84: };
85: export default Button;
````

## File: src/services/api/content.ts
````typescript
 1: import axios from 'axios';
 2: import { API_URL } from '../../config';
 3: import { checkNetworkStatus, handleApiError } from './auth';
 4: export type Protocol = {
 5:   id: string;
 6:   title: string;
 7:   description: string;
 8:   isPremium: boolean;
 9:   duration: string;
10:   category: string;
11: };
12: export type ProtocolDetail = Protocol & {
13:   steps: Array<{
14:     id: string;
15:     title: string;
16:     description: string;
17:     duration: string;
18:     isPremium: boolean;
19:   }>;
20:   references: string[];
21: };
22: export const fetchProtocols = async (): Promise<Protocol[]> => {
23:   try {
24:     checkNetworkStatus();
25:     const response = await axios.get(`${API_URL}/protocols`);
26:     return response.data;
27:   } catch (error) {
28:     throw new Error(handleApiError(error));
29:   }
30: };
31: export const fetchProtocolDetails = async (id: string, isPremium: boolean = false): Promise<ProtocolDetail> => {
32:   try {
33:     checkNetworkStatus();
34:     const response = await axios.get(`${API_URL}/protocols/${id}`, {
35:       params: {
36:         isPremium: isPremium,
37:       },
38:     });
39:     return response.data;
40:   } catch (error) {
41:     throw new Error(handleApiError(error));
42:   }
43: };
````

## File: src/store/billingStore.ts
````typescript
 1: import { create } from 'zustand';
 2: import { fetchSubscriptionStatus } from '../services/api/billing';
 3: import { SubscriptionStatus } from '../types/billing';
 4: interface BillingState {
 5:   subscription: SubscriptionStatus | null;
 6:   isLoading: boolean;
 7:   error: string | null;
 8:   fetchSubscription: (userId: string) => Promise<void>;
 9:   refreshSubscription: (userId: string) => Promise<void>;
10:   initSubscriptionRefresh: (userId: string) => void;
11: }
12: const useBillingStore = create<BillingState>((set) => ({
13:   subscription: null,
14:   isLoading: false,
15:   error: null,
16:   fetchSubscription: async (userId) => {
17:     try {
18:       set({ isLoading: true, error: null });
19:       const subscription = await fetchSubscriptionStatus(userId);
20:       set({ subscription, isLoading: false });
21:     } catch (error: any) {
22:       set({ error: error.message, isLoading: false });
23:       throw error;
24:     }
25:   },
26:   refreshSubscription: async (userId) => {
27:     try {
28:       const subscription = await fetchSubscriptionStatus(userId);
29:       set({ subscription });
30:     } catch (error) {
31:       console.error('Failed to refresh subscription:', error);
32:     }
33:   },
34:   initSubscriptionRefresh: () => {
35:   },
36: }));
37: export default useBillingStore;
````

## File: src/App.tsx
````typescript
 1: import React, { useEffect } from 'react';
 2: import { ThemeProvider } from './theme/ThemeProvider';
 3: import messaging from '@react-native-firebase/messaging';
 4: import { Platform } from 'react-native';
 5: import RootNavigator from './navigation/RootNavigator';
 6: import { sendDeviceToken } from '@/services/api/user';
 7: const App = () => {
 8:   async function requestUserPermission() {
 9:     const authStatus = await messaging().requestPermission();
10:     const enabled =
11:       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
12:       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
13:     if (enabled) {
14:       console.log('Authorization status:', authStatus);
15:     }
16:   }
17:   useEffect(() => {
18:     if (Platform.OS === 'ios') {
19:       requestUserPermission();
20:     }
21:     messaging()
22:       .getToken()
23:       .then(fcmToken => {
24:         if (fcmToken) {
25:           console.log('FCM Token:', fcmToken);
26:           sendDeviceToken(fcmToken);
27:         } else {
28:           console.log('User does not have a device token yet');
29:         }
30:       });
31:     messaging().onMessage(async remoteMessage => {
32:       console.log('Received foreground message:', remoteMessage);
33:     });
34:     messaging().setBackgroundMessageHandler(async remoteMessage => {
35:       console.log('Message handled in the background:', remoteMessage);
36:     });
37:   }, []);
38:   return (
39:     <ThemeProvider>
40:       <RootNavigator />
41:     </ThemeProvider>
42:   );
43: };
44: export default App;
````

## File: App.tsx
````typescript
  1: import React from 'react';
  2: import type {PropsWithChildren} from 'react';
  3: import {
  4:   ScrollView,
  5:   StatusBar,
  6:   StyleSheet,
  7:   Text,
  8:   useColorScheme,
  9:   View,
 10: } from 'react-native';
 11: import Config from 'react-native-config';
 12: import {
 13:   Colors,
 14:   DebugInstructions,
 15:   Header,
 16:   LearnMoreLinks,
 17:   ReloadInstructions,
 18: } from 'react-native/Libraries/NewAppScreen';
 19: import Button from './src/components/Button/Button';
 20: import { ThemeProvider } from './src/theme/ThemeProvider';
 21: import theme from './src/theme/theme';
 22: type SectionProps = PropsWithChildren<{
 23:   title: string;
 24: }>;
 25: function Section({children, title}: SectionProps): React.JSX.Element {
 26:   const isDarkMode = useColorScheme() === 'dark';
 27:   return (
 28:     <View style={styles.sectionContainer}>
 29:       <Text
 30:         style={[
 31:           styles.sectionTitle,
 32:           {
 33:             color: isDarkMode ? Colors.white : Colors.black,
 34:           },
 35:         ]}>
 36:         {title}
 37:       </Text>
 38:       <Text
 39:         style={[
 40:           styles.sectionDescription,
 41:           {
 42:             color: isDarkMode ? Colors.light : Colors.dark,
 43:           },
 44:         ]}>
 45:         {children}
 46:       </Text>
 47:     </View>
 48:   );
 49: }
 50: function App(): React.JSX.Element {
 51:   const isDarkMode = useColorScheme() === 'dark';
 52:   const backgroundStyle = {
 53:     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
 54:   };
 55:   const safePadding = '5%';
 56:   return (
 57:     <ThemeProvider theme={theme}>
 58:       <View style={backgroundStyle}>
 59:         <StatusBar
 60:           barStyle={isDarkMode ? 'light-content' : 'dark-content'}
 61:           backgroundColor={backgroundStyle.backgroundColor}
 62:         />
 63:         <ScrollView
 64:           style={backgroundStyle}>
 65:           <View style={{paddingRight: safePadding}}>
 66:             <Header/>
 67:             <Text>API Base URL: {Config.API_BASE_URL}</Text>
 68:           </View>
 69:           <View
 70:             style={{
 71:               backgroundColor: isDarkMode ? Colors.black : Colors.white,
 72:               paddingHorizontal: safePadding,
 73:               paddingBottom: safePadding,
 74:             }}>
 75:           <Button
 76:             title="Test Button"
 77:             onPress={() => console.log('Button pressed')}
 78:             variant="primary"
 79:           />
 80:           <Section title="Step One">
 81:             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
 82:             screen and then come back to see your edits.
 83:           </Section>
 84:             <Section title="See Your Changes">
 85:               <ReloadInstructions />
 86:             </Section>
 87:             <Section title="Debug">
 88:               <DebugInstructions />
 89:             </Section>
 90:             <Section title="Learn More">
 91:               Read the docs to discover what to do next:
 92:             </Section>
 93:             <LearnMoreLinks />
 94:           </View>
 95:         </ScrollView>
 96:       </View>
 97:     </ThemeProvider>
 98:   );
 99: }
100: const styles = StyleSheet.create({
101:   sectionContainer: {
102:     marginTop: 32,
103:     paddingHorizontal: 24,
104:   },
105:   sectionTitle: {
106:     fontSize: 24,
107:     fontWeight: '600',
108:   },
109:   sectionDescription: {
110:     marginTop: 8,
111:     fontSize: 18,
112:     fontWeight: '400',
113:   },
114:   highlight: {
115:     fontWeight: '700',
116:   },
117: });
118: export default App;
````

## File: src/navigation/AppStack.tsx
````typescript
 1: import React from 'react';
 2: import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 3: import { createNativeStackNavigator } from '@react-navigation/native-stack';
 4: import { AppStackParamList, ProtocolStackParamList } from './AppStack.d';
 5: import ProtocolListScreen from '../screens/Protocols/ProtocolListScreen';
 6: import ProtocolDetailScreen from '../screens/Protocols/ProtocolDetailScreen';
 7: import NotesScreen from '../screens/Notes/NotesScreen';
 8: import SettingsScreen from '../screens/Settings/SettingsScreen';
 9: import ReminderListScreen from '../screens/Reminders/ReminderListScreen';
10: import CreateEditReminderScreen from '../screens/Reminders/CreateEditReminderScreen';
11: const Tab = createBottomTabNavigator<AppStackParamList>();
12: const ProtocolStack = createNativeStackNavigator<ProtocolStackParamList>();
13: const ProtocolStackScreen = () => {
14:   return (
15:     <ProtocolStack.Navigator screenOptions={{ headerShown: false }}>
16:       <ProtocolStack.Screen name="ProtocolList" component={ProtocolListScreen} />
17:       <ProtocolStack.Screen name="ProtocolDetail" component={ProtocolDetailScreen} />
18:       <ProtocolStack.Screen name="ReminderList" component={ReminderListScreen} />
19:       <ProtocolStack.Screen name="CreateEditReminder" component={CreateEditReminderScreen} />
20:     </ProtocolStack.Navigator>
21:   );
22: };
23: const AppStack: React.FC = () => {
24:   return (
25:     <Tab.Navigator screenOptions={{ headerShown: false }}>
26:       <Tab.Screen name="Protocols" component={ProtocolStackScreen}  />
27:       <Tab.Screen name="Notes" component={NotesScreen} />
28:       <Tab.Screen name="Settings" component={SettingsScreen} />
29:     </Tab.Navigator>
30:   );
31: };
32: export default AppStack;
````

## File: src/screens/Notes/NotesScreen.tsx
````typescript
 1: import React, { useState, useEffect } from 'react';
 2: import { View, Text, FlatList, StyleSheet } from 'react-native';
 3: import { useNavigation, NavigationProp } from '@react-navigation/native';
 4: import useAuth from '@/store/authStore';
 5: import { getNotes } from '@/services/api/notes';
 6: import { Note } from '../../types/note';
 7: import { RootStackParamList } from '../../navigation/RootNavigator.d';
 8: import { useTheme } from '../../theme/ThemeProvider';
 9: type NotesScreenNavigationProp = NavigationProp<RootStackParamList, 'App'>;
10: const NotesScreen: React.FC = () => {
11:   const navigation = useNavigation<NotesScreenNavigationProp>();
12:   const { user } = useAuth();
13:   const [notes, setNotes] = useState<Note[]>([]);
14:   const [loading, setLoading] = useState(true);
15:   const theme = useTheme();
16:   const styles = StyleSheet.create({
17:     container: {
18:       flex: 1,
19:       padding: 20,
20:     },
21:     noteItem: {
22:       padding: 10,
23:       borderBottomWidth: 1,
24:       borderBottomColor: theme.colors.neutralForeground3,
25:     },
26:   });
27:   useEffect(() => {
28:     const fetchNotes = async () => {
29:       setLoading(true);
30:       if (user) {
31:         const fetchedNotes = await getNotes(user.id);
32:         setNotes(fetchedNotes);
33:       }
34:       setLoading(false);
35:     };
36:     if (user) {
37:       fetchNotes();
38:     } else {
39:       try {
40:         navigation.navigate('Auth');
41:       } catch (error) {
42:         console.error('Navigation error:', error);
43:       }
44:     }
45:   }, [user, navigation]);
46:   const renderItem = ({ item }: { item: Note }) => (
47:     <View style={styles.noteItem}>
48:       <Text>{item.title}</Text>
49:       <Text>{item.content}</Text>
50:     </View>
51:   );
52:   if (loading) {
53:     return <Text>Loading...</Text>;
54:   }
55:   return (
56:     <View style={styles.container}>
57:       <Text>Notes Screen</Text>
58:       {}
59:       <FlatList
60:         data={notes}
61:         renderItem={renderItem}
62:         keyExtractor={(item) => item.id}
63:       />
64:     </View>
65:   );
66: };
67: export default NotesScreen;
````

## File: src/screens/Reminders/CreateEditReminderScreen.tsx
````typescript
  1: import React, { useState, useEffect } from 'react';
  2: import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
  3: import CustomTextInput from '../../components/TextInput';
  4: import Button from '../../components/Button/Button';
  5: import useAuthStore from '@/store/authStore';
  6: import { createReminder, updateReminder } from '@/services/api/reminders';
  7: import { NativeStackScreenProps } from '@react-navigation/native-stack';
  8: import { ProtocolStackParamList } from '../../navigation/AppStack.d';
  9: import { useTheme } from '../../theme/ThemeProvider';
 10: type CreateEditReminderScreenProps = NativeStackScreenProps<ProtocolStackParamList, 'CreateEditReminder'>;
 11: const CreateEditReminderScreen: React.FC<CreateEditReminderScreenProps> = ({ route, navigation }) => {
 12:   const reminder = route.params?.reminder;
 13:   const { user } = useAuthStore();
 14:   const [protocolId, setProtocolId] = useState(route.params?.reminder?.protocolId || '');
 15:   const [time, setTime] = useState(route.params?.reminder?.time || ''); // e.g., "HH:MM"
 16:   const [loading, setLoading] = useState(false);
 17:   const [error, setError] = useState<string | null>(null);
 18:   const theme = useTheme();
 19:   const styles = StyleSheet.create({
 20:     container: {
 21:       flex: 1,
 22:       justifyContent: 'center',
 23:       alignItems: 'center',
 24:       padding: 20,
 25:     },
 26:     centered: {
 27:       justifyContent: 'center',
 28:       alignItems: 'center',
 29:     },
 30:     title: {
 31:       fontSize: 24,
 32:       fontWeight: 'bold',
 33:       marginBottom: 20,
 34:     },
 35:     input: {
 36:       width: '100%',
 37:       height: 40,
 38:       borderColor: theme.colors.neutralForeground3,
 39:       borderWidth: 1,
 40:       marginBottom: 10,
 41:       paddingHorizontal: 10,
 42:     },
 43:     savingText: {
 44:       marginTop: 10,
 45:     },
 46:     errorText: {
 47:       color: theme.colors.statusDangerBackground1,
 48:     },
 49:   });
 50:   useEffect(() => {
 51:     if (reminder) {
 52:       setProtocolId(reminder.protocolId);
 53:       setTime(reminder.time);
 54:     }
 55:   }, [reminder]);
 56:   const handleSave = async () => {
 57:     if (!user) {
 58:       return;
 59:     }
 60:     setLoading(true);
 61:     setError(null);
 62:     try {
 63:       const reminderData = { protocolId, time, userId: user.id };
 64:       if (reminder) {
 65:         await updateReminder(reminder.id, reminderData);
 66:       } else {
 67:         await createReminder(reminderData);
 68:       }
 69:       navigation.goBack();
 70:     } catch (err: any) {
 71:       setError('Failed to save reminder.');
 72:       console.error(err);
 73:     } finally {
 74:       setLoading(false);
 75:     }
 76:   };
 77:   if (!user?.isPremium) {
 78:     return (
 79:       <View style={styles.container}>
 80:         <Text>This feature is only available for premium users.</Text>
 81:       </View>
 82:     );
 83:   }
 84:   if (loading) {
 85:     return (
 86:       <View style={[styles.container, styles.centered]}>
 87:         <ActivityIndicator size="large" color={theme.colors.primary} />
 88:         <Text style={styles.savingText}>Saving Reminder...</Text>
 89:       </View>
 90:     );
 91:   }
 92:   if (error) {
 93:     return (
 94:       <View style={[styles.container, styles.centered]}>
 95:         <Text style={styles.errorText}>{error}</Text>
 96:       </View>
 97:     );
 98:   }
 99:   return (
100:     <View style={styles.container}>
101:       <Text style={styles.title}>{reminder ? 'Edit Reminder' : 'Create Reminder'}</Text>
102:       <CustomTextInput
103:         style={styles.input}
104:         placeholder="Protocol ID"
105:         value={protocolId}
106:         onChangeText={setProtocolId}
107:       />
108:       <CustomTextInput
109:         style={styles.input}
110:         placeholder="Time (HH:MM)"
111:         value={time}
112:         onChangeText={setTime}
113:       />
114:       <Button
115:         title="Save Reminder"
116:         onPress={handleSave}
117:         accessibilityLabel="Save Reminder"
118:         accessibilityHint="Save the reminder"
119:         accessibilityRole="button"
120:       />
121:     </View>
122:   );
123: };
124: export default CreateEditReminderScreen;
````

## File: src/screens/ForgotPasswordScreen.tsx
````typescript
 1: import React, { useState } from 'react';
 2: import { View, Text, Button, StyleSheet, Alert } from 'react-native';
 3: import CustomTextInput from '../components/TextInput';
 4: import { forgotPassword } from '@/services/api/auth';
 5: const ForgotPasswordScreen = () => {
 6:   const [email, setEmail] = useState('');
 7:   const [loading, setLoading] = useState(false);
 8:   const handleResetPassword = async () => {
 9:     if (!email) {
10:       Alert.alert('Error', 'Please enter your email');
11:       return;
12:     }
13:     setLoading(true);
14:     try {
15:       await forgotPassword(email);
16:       Alert.alert('Success', 'Password reset link sent to your email');
17:     } catch (error: any) {
18:       Alert.alert('Error', error.message || 'Failed to send reset link');
19:     } finally {
20:       setLoading(false);
21:     }
22:   };
23:   return (
24:     <View style={styles.container}>
25:       <Text style={styles.title}>Reset Password</Text>
26:       <Text style={styles.subtitle}>Enter your email to receive a reset link</Text>
27:       <CustomTextInput
28:         style={styles.input}
29:         placeholder="Email"
30:         value={email}
31:         onChangeText={setEmail}
32:         keyboardType="email-address"
33:         autoCapitalize="none"
34:         accessibilityLabel="Email address"
35:         accessibilityHint="Enter your email address"
36:       />
37:       <Button
38:         title={loading ? "Sending..." : "Send Reset Link"}
39:         onPress={handleResetPassword}
40:         disabled={loading}
41:       />
42:     </View>
43:   );
44: };
45: const styles = StyleSheet.create({
46:   container: {
47:     flex: 1,
48:     padding: 20,
49:     justifyContent: 'center',
50:     backgroundColor: '#fff',
51:   },
52:   title: {
53:     fontSize: 24,
54:     marginBottom: 10,
55:     textAlign: 'center',
56:     color: '#333',
57:   },
58:   subtitle: {
59:     fontSize: 16,
60:     marginBottom: 20,
61:     textAlign: 'center',
62:     color: '#666',
63:   },
64:   input: {
65:     height: 50,
66:     borderColor: '#ddd',
67:     borderWidth: 1,
68:     marginBottom: 15,
69:     paddingHorizontal: 15,
70:     borderRadius: 5,
71:     fontSize: 16,
72:     color: '#333',
73:   },
74: });
75: export default ForgotPasswordScreen;
````

## File: src/screens/SignupScreen.tsx
````typescript
  1: import React, { useState } from 'react';
  2: import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
  3: import CustomTextInput from '../components/TextInput';
  4: import Button from '../components/Button/Button';
  5: import useAuthStore from '@/store/authStore';
  6: import { useNavigation } from '@react-navigation/native';
  7: import { AuthStackNavigationProp } from '../navigation/AuthStack';
  8: const SignupScreen = () => {
  9:   const navigation = useNavigation<AuthStackNavigationProp>();
 10:   const register = useAuthStore((state) => state.register);
 11:   const [name, setName] = useState('');
 12:   const [email, setEmail] = useState('');
 13:   const [password, setPassword] = useState('');
 14:   const [loading, setLoading] = useState(false);
 15:   const [error, setError] = useState('');
 16:   const handleSignup = async () => {
 17:     setLoading(true);
 18:     setError('');
 19:     try {
 20:       await register(email, password, name);
 21:       // Navigation to Main App stack will be handled by RootNavigator based on isAuthenticated state
 22:     } catch (err: any) {
 23:       setError(err.message || 'Signup failed');
 24:     } finally {
 25:       setLoading(false);
 26:     }
 27:   };
 28:   return (
 29:     <View style={styles.container}>
 30:       <Text style={styles.title}>Sign Up</Text>
 31:       <CustomTextInput
 32:         style={styles.input}
 33:         placeholder="Name"
 34:         value={name}
 35:         onChangeText={setName}
 36:         autoCapitalize="words"
 37:       />
 38:       <CustomTextInput
 39:         style={styles.input}
 40:         placeholder="Email"
 41:         value={email}
 42:         onChangeText={setEmail}
 43:         keyboardType="email-address"
 44:         autoCapitalize="none"
 45:       />
 46:       <CustomTextInput
 47:         style={styles.input}
 48:         placeholder="Password"
 49:         value={password}
 50:         onChangeText={setPassword}
 51:         secureTextEntry
 52:       />
 53:       {loading ? (
 54:         <ActivityIndicator size="small" color="#0000ff" />
 55:       ) : (
 56:         <Button
 57:           title="Sign Up"
 58:           onPress={handleSignup}
 59:           disabled={!name || !email || !password}
 60:           accessibilityLabel="Sign Up"
 61:           accessibilityHint="Create a new account"
 62:           accessibilityRole="button"
 63:         />
 64:       )}
 65:       {error ? <Text style={styles.errorText}>{error}</Text> : null}
 66:       <Button
 67:         title="Already have an account? Login"
 68:         onPress={() => navigation.navigate('Login')}
 69:         accessibilityLabel="Login"
 70:         accessibilityHint="Navigate to the login screen"
 71:         accessibilityRole="button"
 72:       />
 73:     </View>
 74:   );
 75: };
 76: const styles = StyleSheet.create({
 77:   container: {
 78:     flex: 1,
 79:     justifyContent: 'center',
 80:     padding: 16,
 81:   },
 82:   title: {
 83:     fontSize: 24,
 84:     marginBottom: 16,
 85:     textAlign: 'center',
 86:   },
 87:   input: {
 88:     height: 40,
 89:     borderColor: 'gray',
 90:     borderWidth: 1,
 91:     marginBottom: 12,
 92:     paddingHorizontal: 8,
 93:   },
 94:   errorText: {
 95:     color: 'red',
 96:     marginTop: 12,
 97:     textAlign: 'center',
 98:   },
 99: });
100: export default SignupScreen;
````

## File: src/navigation/AppStack.d.ts
````typescript
 1: import { Reminder } from '../services/api/reminders';
 2: export type AppStackParamList = {
 3:   Protocols: { screen?: keyof ProtocolStackParamList };
 4:   Notes: undefined;
 5:   Settings: undefined;
 6: };
 7: export type ProtocolStackParamList = {
 8:   ProtocolList: undefined;
 9:   ProtocolDetail: { protocolId: string };
10:   ReminderList: undefined;
11:   CreateEditReminder: { reminder?: Reminder };
12: };
13: export type NoteStackParamList = {
14:   NoteList: undefined;
15:   NoteDetail: { id: string };
16: };
17: export type SettingsStackParamList = {
18:   Settings: undefined;
19: };
````

## File: src/screens/Protocols/ProtocolListScreen.tsx
````typescript
  1: import React, { useEffect, useState } from 'react';
  2: import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
  3: import { NativeStackScreenProps } from '@react-navigation/native-stack';
  4: import { ProtocolStackParamList } from '../../navigation/AppStack.d';
  5: import { fetchProtocols, Protocol } from '@/services/api/content';
  6: import { FontAwesome } from '@expo/vector-icons';
  7: import { useTheme } from '../../theme/ThemeProvider';
  8: type Props = NativeStackScreenProps<ProtocolStackParamList, 'ProtocolList'>;
  9: const ProtocolListScreen: React.FC<Props> = ({ navigation }) => {
 10:   const [protocols, setProtocols] = useState<Protocol[]>([]);
 11:   const [loading, setLoading] = useState(true);
 12:   const [error, setError] = useState<string | null>(null);
 13:   const theme = useTheme();
 14:   const styles = StyleSheet.create({
 15:     container: {
 16:       flex: 1,
 17:       backgroundColor: theme.colors.neutralBackground1,
 18:     },
 19:     centered: {
 20:       justifyContent: 'center',
 21:       alignItems: 'center',
 22:     },
 23:     list: {
 24:       padding: 16,
 25:     },
 26:     item: {
 27:       padding: '4%',
 28:       marginBottom: '3%',
 29:       backgroundColor: theme.colors.neutralBackground3,
 30:       borderRadius: 8,
 31:     },
 32:     itemContent: {
 33:       flexDirection: 'row',
 34:       justifyContent: 'space-between',
 35:       alignItems: 'center',
 36:     },
 37:     title: {
 38:       fontSize: 16,
 39:       fontWeight: 'bold',
 40:       marginBottom: 4,
 41:     },
 42:     description: {
 43:       fontSize: 14,
 44:       color: theme.colors.neutralForeground2,
 45:     },
 46:     premiumIcon: {
 47:       marginLeft: 8,
 48:     },
 49:   });
 50:   useEffect(() => {
 51:     const loadProtocols = async () => {
 52:       try {
 53:         const data = await fetchProtocols();
 54:         setProtocols(data);
 55:       } catch (err) {
 56:         setError('Failed to fetch protocols.');
 57:         console.error(err);
 58:       } finally {
 59:         setLoading(false);
 60:       }
 61:     };
 62:     loadProtocols();
 63:   }, []);
 64:   const renderProtocolItem = ({ item }: { item: Protocol }) => (
 65:     <TouchableOpacity
 66:       style={styles.item}
 67:       onPress={() => navigation.navigate('ProtocolDetail', { protocolId: item.id })}
 68:       accessibilityLabel={`Protocol: ${item.title}`}
 69:       accessibilityHint="View protocol details"
 70:     >
 71:       <View style={styles.itemContent}>
 72:         <Text style={styles.title}>{item.title}</Text>
 73:         {item.isPremium && (
 74:           <FontAwesome name="star" size={16} color={theme.colors.brandForeground1} style={styles.premiumIcon} accessibilityLabel="Premium protocol" />
 75:         )}
 76:       </View>
 77:       <Text style={styles.description}>{item.description}</Text>
 78:     </TouchableOpacity>
 79:   );
 80:   if (loading) {
 81:     return (
 82:       <View style={[styles.container, styles.centered]}>
 83:         <ActivityIndicator size="large" color={theme.colors.primary} />
 84:         <Text style={{ marginTop: 10 }}>Loading Protocols...</Text>
 85:       </View>
 86:     );
 87:   }
 88:   if (error) {
 89:     return (
 90:       <View style={[styles.container, styles.centered]}>
 91:         <Text style={{ color: theme.colors.statusDangerBackground1, fontSize: 16, fontWeight: 'bold' }}>{error}</Text>
 92:       </View>
 93:     );
 94:   }
 95:   return (
 96:     <View style={styles.container}>
 97:       {protocols.length === 0 && !loading && !error ? (
 98:         <View style={[styles.centered, { flex: 1 }]}>
 99:           <Text>No protocols found.</Text>
100:         </View>
101:       ) : (
102:         <FlatList
103:           data={protocols}
104:           renderItem={renderProtocolItem}
105:           keyExtractor={(item) => item.id}
106:           contentContainerStyle={styles.list}
107:         />
108:       )}
109:     </View>
110:   );
111: };
112: export default ProtocolListScreen;
````

## File: src/screens/Settings/SettingsScreen.tsx
````typescript
 1: import React, { useEffect } from 'react';
 2: import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
 3: import { useNavigation, NavigationProp } from '@react-navigation/native';
 4: import Button from '../../components/Button/Button';
 5: import { AppStackParamList } from '../../navigation/AppStack.d';
 6: import useBillingStore from '@/store/billingStore';
 7: import useAuthStore from '@/store/authStore';
 8: type SettingsScreenNavigationProp = NavigationProp<AppStackParamList, 'Settings'>;
 9: const SettingsScreen: React.FC = () => {
10:   const { subscription, isLoading, fetchSubscription, initSubscriptionRefresh } = useBillingStore();
11:   const { user } = useAuthStore();
12:   const navigation = useNavigation<SettingsScreenNavigationProp>();
13:   useEffect(() => {
14:     if (user?.id && !subscription && !isLoading) {
15:       fetchSubscription(user.id);
16:       initSubscriptionRefresh(user.id);
17:     }
18:   }, [user, subscription, isLoading, fetchSubscription, initSubscriptionRefresh]);
19:   return (
20:     <View style={styles.container}>
21:       <Text style={styles.title}>Settings</Text>
22:       {isLoading && <ActivityIndicator size="small" />}
23:       {subscription ? (
24:         <View>
25:           <Text>Subscription Status: {subscription.status}</Text>
26:           {subscription.planId && <Text>Plan: {subscription.planId}</Text>}
27:           {subscription.currentPeriodEnd && <Text>Ends: {new Date(subscription.currentPeriodEnd).toLocaleDateString()}</Text>}
28:         </View>
29:       ) : (
30:         <Text>No active subscription.</Text>
31:       )}
32:       <Button
33:         title="Reminders"
34:         onPress={() => navigation.navigate('Protocols', { screen: 'ReminderList' })}
35:         accessibilityLabel="Reminders"
36:         accessibilityHint="Navigate to the reminders list"
37:         accessibilityRole="button"
38:       />
39:     </View>
40:   );
41: };
42: const styles = StyleSheet.create({
43:   container: {
44:     flex: 1,
45:     justifyContent: 'center',
46:     alignItems: 'center',
47:   },
48:   title: {
49:     fontSize: 24,
50:     fontWeight: 'bold',
51:     marginBottom: 20,
52:   },
53: });
54: export default SettingsScreen;
````

## File: src/screens/LoginScreen.tsx
````typescript
 1: import React, { useState } from 'react';
 2: import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
 3: import CustomTextInput from '../components/TextInput';
 4: import useAuthStore from '@/store/authStore';
 5: import { useNavigation } from '@react-navigation/native';
 6: import { AuthStackNavigationProp } from '../navigation/AuthStack';
 7: import { useTheme } from '../theme/ThemeProvider';
 8: import Button from '../components/Button/Button';
 9: const LoginScreen = () => {
10:   const navigation = useNavigation<AuthStackNavigationProp>();
11:   const login = useAuthStore((state) => state.login);
12:   const theme = useTheme();
13:   const styles = StyleSheet.create({
14:     container: {
15:       flex: 1,
16:       justifyContent: 'center',
17:       padding: theme.spacing.s4,
18:     },
19:     title: {
20:       fontSize: theme.typography.heading1.fontSize,
21:       fontWeight: theme.typography.weights.bold,
22:       marginBottom: theme.spacing.s4,
23:       textAlign: 'center',
24:       color: theme.colors.neutralForeground1,
25:     },
26:     input: {
27:       height: '8%',
28:       borderColor: theme.colors.neutralForeground3,
29:       borderWidth: 1,
30:       marginBottom: theme.spacing.s3,
31:       paddingHorizontal: theme.spacing.s2,
32:       color: theme.colors.neutralForeground1,
33:     },
34:     errorText: {
35:       color: theme.colors.statusDangerBackground1,
36:       marginTop: theme.spacing.s3,
37:       textAlign: 'center',
38:       fontSize: theme.typography.body1.fontSize,
39:       fontWeight: theme.typography.weights.semibold,
40:     },
41:   });
42:   const [email, setEmail] = useState('');
43:   const [password, setPassword] = useState('');
44:   const [loading, setLoading] = useState(false);
45:   const [error, setError] = useState('');
46:   const handleLogin = async () => {
47:     setLoading(true);
48:     setError('');
49:     try {
50:       await login(email, password);
51:       // Navigation to Main App stack will be handled by RootNavigator based on isAuthenticated state
52:     } catch (err: any) {
53:       setError(err.message || 'Login failed');
54:     } finally {
55:       setLoading(false);
56:     }
57:   };
58:   return (
59:     <View style={styles.container}>
60:       <Text style={styles.title} accessibilityRole="header" accessibilityLabel="Login">Login</Text>
61:       <CustomTextInput
62:         style={styles.input}
63:         placeholder="Email"
64:         value={email}
65:         onChangeText={setEmail}
66:         keyboardType="email-address"
67:         autoCapitalize="none"
68:         accessibilityLabel="Email address"
69:         accessibilityHint="Enter your email address"
70:       />
71:       <CustomTextInput
72:         style={styles.input}
73:         placeholder="Password"
74:         value={password}
75:         onChangeText={setPassword}
76:         secureTextEntry
77:         accessibilityLabel="Password"
78:         accessibilityHint="Enter your password"
79:         autoCapitalize="none"
80:       />
81:       {loading ? (
82:         <ActivityIndicator size="small" color={theme.colors.primary} accessibilityLabel="Loading" />
83:       ) : (
84:         <Button title="Login" onPress={handleLogin} disabled={!email || !password} accessibilityLabel="Login" accessibilityHint="Press to login" accessibilityRole="button" />
85:       )}
86:       {error ? <Text style={styles.errorText} accessibilityLiveRegion="polite">{error}</Text> : null}
87:       <Button title="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} variant="secondary" accessibilityLabel="Forgot Password" accessibilityHint="Navigate to forgot password screen"/>
88:       <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate('Signup')} variant="secondary" accessibilityLabel="Sign Up" accessibilityHint="Navigate to sign up screen"/>
89:     </View>
90:   );
91: };
92: export default LoginScreen;
````

## File: src/store/authStore.ts
````typescript
  1: import { create } from 'zustand';
  2: import * as Keychain from 'react-native-keychain';
  3: import { sendDeviceToken } from '../services/api/user';
  4: import messaging from '@react-native-firebase/messaging';
  5: import { login as loginApi, register as registerApi, logout as logoutApi } from '../services/api/auth';
  6: import useBillingStore from './billingStore';
  7: interface User {
  8:   id: string;
  9:   name: string;
 10:   email: string;
 11:   isPremium: boolean;
 12: }
 13: interface AuthState {
 14:   accessToken: string | null;
 15:   user: User | null;
 16:   isAuthenticated: boolean;
 17:   login: (email: string, password: string) => Promise<void>;
 18:   register: (email: string, password: string, name: string) => Promise<void>;
 19:   logout: () => Promise<void>;
 20:   loadToken: () => Promise<void>;
 21: }
 22: const useAuthStore = create<AuthState>((set) => ({
 23:   accessToken: null,
 24:   user: null,
 25:   isAuthenticated: false,
 26:   login: async (email, password) => {
 27:     try {
 28:       const data = await loginApi({ email, password });
 29:       await Keychain.setGenericPassword('authToken', data.accessToken);
 30:       set({
 31:         accessToken: data.accessToken,
 32:         user: {
 33:           id: data.user.id,
 34:           name: data.user.name,
 35:           email: data.user.email,
 36:           isPremium: data.user.isPremium,
 37:         },
 38:         isAuthenticated: true,
 39:       });
 40:       const fcmToken = await messaging().getToken();
 41:       if (fcmToken) {
 42:         sendDeviceToken(fcmToken);
 43:       }
 44:     } catch (error) {
 45:       console.error('Login error:', error);
 46:       throw error;
 47:     }
 48:   },
 49:   register: async (email, password, name) => {
 50:     try {
 51:       const data = await registerApi({ email, password, name });
 52:       await Keychain.setGenericPassword('authToken', data.accessToken);
 53:       set({
 54:         accessToken: data.accessToken,
 55:         user: {
 56:           id: data.user.id,
 57:           name: data.user.name,
 58:           email: data.user.email,
 59:           isPremium: data.user.isPremium,
 60:         },
 61:         isAuthenticated: true,
 62:       });
 63:       const fcmToken = await messaging().getToken();
 64:       if (fcmToken) {
 65:         sendDeviceToken(fcmToken);
 66:       }
 67:     } catch (error) {
 68:       console.error('Registration error:', error);
 69:       throw error;
 70:     }
 71:   },
 72:   logout: async () => {
 73:     try {
 74:       await logoutApi();
 75:       await Keychain.resetGenericPassword();
 76:       set({
 77:         accessToken: null,
 78:         user: null,
 79:         isAuthenticated: false
 80:       });
 81:     } catch (error) {
 82:       console.error('Logout error:',  error);
 83:       throw error;
 84:     }
 85:   },
 86:   loadToken: async () => {
 87:     try {
 88:       const credentials = await Keychain.getGenericPassword();
 89:       if (credentials) {
 90:         set({
 91:           accessToken: credentials.password,
 92:           isAuthenticated: true
 93:         });
 94:       }
 95:     } catch (error) {
 96:       console.error('Load token error:', error);
 97:       throw error;
 98:     }
 99:   }
100: }));
101: useAuthStore.subscribe((state) => {
102:   const { user } = state;
103:   if (user) {
104:     const billingStore = useBillingStore.getState();
105:     const { subscription } = billingStore;
106:     if (subscription) {
107:       useAuthStore.setState({
108:         user: {
109:           ...user,
110:           isPremium: subscription.status === 'active',
111:         },
112:       });
113:     }
114:   }
115: });
116: export default useAuthStore;
````

## File: src/screens/Reminders/ReminderListScreen.tsx
````typescript
  1: import React, { useEffect, useState } from 'react';
  2: import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
  3: import { useNavigation, NavigationProp } from '@react-navigation/native';
  4: import Button from '../../components/Button/Button';
  5: import useAuthStore from '@/store/authStore';
  6: import { fetchReminders } from '@/services/api/reminders';
  7: import { useTheme } from '../../theme/ThemeProvider';
  8: import UpgradePrompt from '../../components/UpgradePrompt';
  9: import { ProtocolStackParamList } from '../../navigation/AppStack.d';
 10: type ReminderListScreenNavigationProp = NavigationProp<ProtocolStackParamList, 'ReminderList'>;
 11: const ReminderListScreen = () => {
 12:   const navigation = useNavigation<ReminderListScreenNavigationProp>();
 13:   const { user } = useAuthStore();
 14:   const [reminders, setReminders] = useState<any[]>([]);
 15:   const [loading, setLoading] = useState(true);
 16:   const [error, setError] = useState<string | null>(null);
 17:   const theme = useTheme();
 18:   const styles = StyleSheet.create({
 19:     container: {
 20:       flex: 1,
 21:       justifyContent: 'center',
 22:       alignItems: 'center',
 23:     },
 24:     reminderItem: {
 25:       padding: '3%',
 26:       borderBottomWidth: 1,
 27:       borderBottomColor: theme.colors.neutralForeground3,
 28:     },
 29:     centered: {
 30:       justifyContent: 'center',
 31:       alignItems: 'center',
 32:     },
 33:     loadingText: {
 34:       marginTop: 10,
 35:     },
 36:     errorText: {
 37:       color: theme.colors.statusDangerBackground1,
 38:       fontSize: 16,
 39:       fontWeight: 'bold',
 40:     },
 41:     noRemindersContainer: {
 42:       flex: 1,
 43:     },
 44:   });
 45:   useEffect(() => {
 46:     const loadReminders = async () => {
 47:       if (!user) {
 48:         return;
 49:       }
 50:       try {
 51:         setLoading(true);
 52:         const data = await fetchReminders(user.id);
 53:         setReminders(data);
 54:       } catch (err: any) {
 55:         setError('Failed to fetch reminders.');
 56:         console.error(err);
 57:       } finally {
 58:         setLoading(false);
 59:       }
 60:     };
 61:     loadReminders();
 62:   }, [user]);
 63:   if (!user?.isPremium) {
 64:     return (
 65:       <View style={styles.container}>
 66:         <UpgradePrompt />
 67:       </View>
 68:     );
 69:   }
 70:   if (loading) {
 71:     return (
 72:       <View style={[styles.container, styles.centered]}>
 73:         <ActivityIndicator size="large" color={theme.colors.primary} />
 74:         <Text style={styles.loadingText}>Loading reminders...</Text>
 75:       </View>
 76:     );
 77:   }
 78:   if (error) {
 79:     return (
 80:       <View style={[styles.container, styles.centered]}>
 81:         <Text style={styles.errorText}>{error}</Text>
 82:       </View>
 83:     );
 84:   }
 85:   return (
 86:     <View style={styles.container}>
 87:       {reminders.length === 0 ? (
 88:         <View style={[styles.centered, styles.noRemindersContainer]} accessibilityLabel="No reminders found">
 89:           <Text>No reminders found.</Text>
 90:         </View>
 91:       ) : (
 92:         <FlatList
 93:           data={reminders}
 94:           keyExtractor={(item, index) => index.toString()}
 95:           renderItem={({ item }) => (
 96:             <View style={styles.reminderItem} accessibilityLabel={`Reminder: ${item.time}, Protocol: ${item.protocolId}`}>
 97:               <Text>{item.time}</Text>
 98:               <Text>{item.protocolId}</Text>
 99:             </View>
100:           )}
101:           accessibilityLabel="List of reminders"
102:         />
103:       )}
104:       <Button
105:         title="Add Reminder"
106:         onPress={() => {
107:           navigation.navigate('CreateEditReminder', { reminder: undefined as any });
108:         }}
109:         accessibilityLabel="Add Reminder"
110:         accessibilityHint="Navigate to create a new reminder"
111:         accessibilityRole="button"
112:       />
113:     </View>
114:   );
115: };
116: export default ReminderListScreen;
````

## File: src/screens/Protocols/ProtocolDetailScreen.tsx
````typescript
  1: import React, { useEffect, useState } from 'react';
  2: import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
  3: import { FontAwesome } from '@expo/vector-icons';
  4: import Button from '../../components/Button/Button';
  5: import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
  6: import { useNavigation } from '@react-navigation/native';
  7: import { ProtocolStackParamList } from '../../navigation/AppStack.d';
  8: import { useTheme } from '../../theme/ThemeProvider';
  9: import { fetchProtocolDetails, ProtocolDetail } from '@/services/api/content';
 10: import useAuthStore from '@/store/authStore';
 11: import useBillingStore from '@/store/billingStore';
 12: import UpgradePrompt from '../../components/UpgradePrompt';
 13: type Props = NativeStackScreenProps<ProtocolStackParamList, 'ProtocolDetail'>;
 14: type ProtocolDetailNavigationProp = NativeStackNavigationProp<ProtocolStackParamList, 'ProtocolDetail'>;
 15: const ProtocolDetailScreen: React.FC<Props> = ({ route }) => {
 16:   const { protocolId } = route.params;
 17:   const [protocol, setProtocol] = useState<ProtocolDetail | null>(null);
 18:   const [loading, setLoading] = useState(true);
 19:   const [error, setError] = useState<string | null>(null);
 20:   const { user } = useAuthStore();
 21:   const { subscription } = useBillingStore();
 22:   const theme = useTheme();
 23:   const navigation = useNavigation<ProtocolDetailNavigationProp>();
 24:   const styles = StyleSheet.create({
 25:     container: {
 26:       flex: 1,
 27:       backgroundColor: theme.colors.neutralBackground1,
 28:     },
 29:     centered: {
 30:       justifyContent: 'center',
 31:       alignItems: 'center',
 32:     },
 33:     content: {
 34:       padding: 16,
 35:     },
 36:     title: {
 37:       fontSize: 24,
 38:       fontWeight: 'bold',
 39:       marginBottom: 8,
 40:     },
 41:     description: {
 42:       fontSize: 16,
 43:       color: theme.colors.neutralForeground2,
 44:       marginBottom: 12,
 45:     },
 46:     meta: {
 47:       fontSize: 14,
 48:       color: theme.colors.neutralForeground3,
 49:       marginBottom: 4,
 50:     },
 51:     section: {
 52:       marginTop: 20,
 53:     },
 54:     sectionTitle: {
 55:       fontSize: 18,
 56:       fontWeight: 'bold',
 57:       marginBottom: 10,
 58:     },
 59:     step: {
 60:       marginBottom: 15,
 61:       padding: 12,
 62:       backgroundColor: theme.colors.neutralBackground3,
 63:       borderRadius: 8,
 64:     },
 65:     stepTitle: {
 66:       fontSize: 16,
 67:       fontWeight: 'bold',
 68:       marginBottom: 4,
 69:     },
 70:     stepDescription: {
 71:       fontSize: 14,
 72:       color: theme.colors.neutralForeground2,
 73:       marginBottom: 4,
 74:     },
 75:     stepMeta: {
 76:       fontSize: 12,
 77:       color: theme.colors.neutralForeground3,
 78:     },
 79:     reference: {
 80:       fontSize: 14,
 81:       color: theme.colors.brandForeground1,
 82:       marginBottom: 5,
 83:     },
 84:   });
 85:   useEffect(() => {
 86:     const loadProtocolDetails = async () => {
 87:       try {
 88:         const isPremiumUser = user?.isPremium || subscription?.status === 'active';
 89:         const data = await fetchProtocolDetails(protocolId, isPremiumUser);
 90:         setProtocol(data);
 91:       } catch (err: any) {
 92:         setError('Failed to fetch protocol details.');
 93:         console.error(err);
 94:       } finally {
 95:         setLoading(false);
 96:       }
 97:     };
 98:     loadProtocolDetails();
 99:   }, [protocolId, user, subscription]);
100:   if (loading) {
101:     return (
102:       <View style={[styles.container, styles.centered]}>
103:         <ActivityIndicator size="large" color={theme.colors.primary} />
104:         <Text style={{ marginTop: 10 }}>Loading Protocol Details...</Text>
105:       </View>
106:     );
107:   }
108:   if (error) {
109:     return (
110:       <View style={[styles.container, styles.centered]}>
111:         <Text style={{ color: theme.colors.statusDangerBackground1 }}>{error}</Text>
112:       </View>
113:     );
114:   }
115:   if (!protocol) {
116:     return (
117:       <View style={[styles.container, styles.centered]}>
118:         <Text>Protocol not found.</Text>
119:       </View>
120:     );
121:   }
122:   return (
123:     <ScrollView style={styles.container}>
124:       <View style={styles.content}>
125:         <View style={{flexDirection: 'row', alignItems: 'center'}}>
126:           <Text style={styles.title}>{protocol.title}</Text>
127:           {protocol.isPremium && (
128:             <FontAwesome name="star" size={16} color={theme.colors.brandForeground1} style={{marginLeft: 8}} />
129:           )}
130:         </View>
131:         {user?.isPremium ? (
132:           <Text style={styles.description}>{protocol.description}</Text>
133:         ) : (
134:           <Text style={styles.description}>{protocol.description.split('\n')[0]}...</Text>
135:         )}
136:         <Text style={styles.meta}>Duration: {protocol.duration}</Text>
137:         <Text style={styles.meta}>Category: {protocol.category}</Text>
138:         {user?.isPremium ? (
139:           protocol.steps && protocol.steps.length > 0 && (
140:             <View style={styles.section}>
141:               <Text style={styles.sectionTitle}>Steps:</Text>
142:               {}
143:               {protocol.steps.map((step, index) => (
144:                 <View key={step.id} style={styles.step}>
145:                   <Text style={styles.stepTitle}>{`${index + 1}. ${step.title}`}</Text>
146:                   <Text style={styles.stepDescription}>{step.description}</Text>
147:                   <Text style={styles.stepMeta}>Duration: {step.duration}</Text>
148:                 </View>
149:               ))}
150:             </View>
151:           )
152:         ) : (
153:           <UpgradePrompt />
154:         )}
155:         {}
156:         {}
157:         <Button
158:           title="Reminders"
159:           onPress={() => navigation.navigate('ReminderList')}
160:           accessibilityLabel="View Reminders"
161:           accessibilityHint="Navigate to the reminders list"
162:           accessibilityRole="button"
163:         />
164:         {user?.isPremium && protocol.references && protocol.references.length > 0 && (
165:           <View style={styles.section}>
166:             <Text style={styles.sectionTitle}>References:</Text>
167:             {}
168:             {protocol.references.map((ref, index) => (
169:               <Text key={index} style={styles.reference}>{`- ${ref}`}</Text>
170:             ))}
171:           </View>
172:         )}
173:       </View>
174:     </ScrollView>
175:   );
176: };
177: export default ProtocolDetailScreen;
````

## File: package.json
````json
 1: {
 2:   "name": "hubermanAppFrontend",
 3:   "version": "0.0.1",
 4:   "private": true,
 5:   "scripts": {
 6:     "android": "react-native run-android",
 7:     "ios": "react-native run-ios",
 8:     "lint": "eslint .",
 9:     "start": "react-native start",
10:     "test": "jest",
11:     "web": "webpack-dev-server --config webpack.config.js",
12:     "build-web": "webpack --config webpack.config.js"
13:   },
14:   "dependencies": {
15:     "@expo/vector-icons": "^14.1.0",
16:     "@react-native-firebase/app": "^22.1.0",
17:     "@react-native-firebase/messaging": "^22.1.0",
18:     "@react-navigation/bottom-tabs": "^7.3.12",
19:     "@react-navigation/native": "^7.1.8",
20:     "@react-navigation/native-stack": "^7.3.12",
21:     "@sentry/react-native": "^6.13.1",
22:     "axios": "^1.9.0",
23:     "react": "^19.1.0",
24:     "react-native": "^0.79.2",
25:     "react-native-config": "^1.5.5",
26:     "react-native-iap": "^12.16.2",
27:     "react-native-keychain": "^10.0.0",
28:     "zustand": "^5.0.4"
29:   },
30:   "devDependencies": {
31:     "@babel/core": "^7.25.2",
32:     "@babel/plugin-proposal-class-properties": "^7.18.6",
33:     "@babel/plugin-proposal-export-namespace-from": "^7.18.9",
34:     "@babel/preset-env": "^7.25.3",
35:     "@babel/runtime": "^7.25.0",
36:     "dotenv-webpack": "^8.1.0",
37:     "@react-native-community/cli": "18.0.0",
38:     "@react-native-community/cli-platform-android": "18.0.0",
39:     "@react-native-community/cli-platform-ios": "18.0.0",
40:     "@react-native/babel-preset": "0.79.2",
41:     "@react-native/eslint-config": "0.79.2",
42:     "@react-native/metro-config": "0.79.2",
43:     "@react-native/typescript-config": "0.79.2",
44:     "@testing-library/react-native": "^12.4.5",
45:     "@types/jest": "^29.5.13",
46:     "@types/react": "19.1.2",
47:     "@types/react-native": "^0.72.8",
48:     "@types/react-test-renderer": "^19.0.0",
49:     "babel-loader": "^10.0.0",
50:     "css-loader": "^7.1.2",
51:     "eslint": "^8.19.0",
52:     "file-loader": "^6.2.0",
53:     "html-webpack-plugin": "^5.6.3",
54:     "jest": "^29.6.3",
55:     "prettier": "2.8.8",
56:     "react-dom": "^19.1.0",
57:     "react-native-web": "^0.20.0",
58:     "react-test-renderer": "^19.1.0",
59:     "style-loader": "^4.0.0",
60:     "typescript": "5.0.4",
61:     "url-loader": "^4.1.1",
62:     "webpack": "^5.99.8",
63:     "webpack-cli": "^6.0.1",
64:     "webpack-dev-server": "^5.2.1"
65:   },
66:   "engines": {
67:     "node": ">=18"
68:   }
69: }
````

## File: app_documentation/frontend_implementation_todo.md
````markdown
  1: # Frontend Implementation Status
  2: 
  3: ## Completed Tasks
  4: - [x] Project setup and configuration
  5: - [x] Authentication flow implementation
  6: - [x] Main app navigation setup
  7: - [x] Protocol list and detail screens
  8: - [x] Settings screen shell
  9: 
 10: ## Pending Tasks
 11: - [x] Subscription flow implementation
 12: - [ ] Premium features implementation
 13: - [x] Push notification setup
 14: - [ ] Final testing and refinements
 15: ---
 16: 
 17: ## Phase 1: Project Setup & Foundation
 18: 
 19: *   **Environment & Tooling:**
 20:     *   `[x]` Initialize React Native project (`npx @react-native-community/cli init hubermanAppFrontend --template react-native-template-typescript` recommended).
 21:     *   `[x]` Install core dependencies:
 22:         *   `[x]` Navigation: `@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs` (or other required navigators).
 23:         *   `[x]` State Management: `zustand`.
 24:         *   `[x]` Secure Storage: `react-native-keychain`.
 25:         *   `[x]` Potentially UI Library: `fluentui-react-native` (if decided upon, see `ui_ux_handoff_integration.md`).
 26:         *   `[x]` API Client: `axios` (or `fetch` wrapper).
 27:     *   `[x]` Set up project structure (`src/screens`, `src/components`, `src/navigation`, `src/services`, `src/store`, `src/assets`, `src/hooks`, `src/theme`).
 28:     *   `[x]` Configure ESLint & Prettier for code quality and consistency.
 29:     *   `[x]` Set up TypeScript configuration (`tsconfig.json`).
 30:     *   `[x]` Configure basic testing environment (Jest is included, add `@testing-library/react-native`).
 31:     *   `[x]` Establish basic Git workflow (branching strategy defined with backend team).
 32:     *   `[x]` Configure environment variables (e.g., using `react-native-config`) for API base URL (local, staging, prod).
 33: 
 34: *   **Core Structure & Base Components:**
 35:     *   `[x]` Define base theme (colors, typography, spacing) aligned with Fluent UI and Figma styles (`src/theme`). Apply theme provider if necessary (depends on UI library choice). - @cline
 36:     *   `[x]` (Test) Create foundational reusable components based on early UI designs/Fluent principles (e.g., `Button`, `TextInput`, `Card`, `ScreenWrapper`).
 37:     *   `[x]` Set up Storybook (optional but recommended) to develop and showcase reusable components in isolation.
 38:     *   `[x]` Implement root navigation structure (`src/navigation/RootNavigator.tsx`): differentiate between Auth stack and Main App stack based on authentication status.
 39: 
 40: ---
 41: 
 42: ## Phase 2: Authentication Flow (UI & API Integration)
 43: 
 44: *   **Screens:**
 45:     *   `[x]` (UI) Build Login screen (`src/screens/Auth/LoginScreen.tsx`).
 46:     *   `[x]` (UI) Build Registration screen (`src/screens/Auth/RegisterScreen.tsx`).
 47:     *   `[x]` (UI) Build Forgot Password screen / flow screens.
 48: *   **API Service:**
 49:     *   `[x]` Implement API service functions (`src/services/api/auth.ts`) to call backend endpoints:
 50:         *   `[x]` `/register` (API)
 51:         *   `[x]` `/login` (API)
 52:         *   `[x]` `/logout` (API)
 53:         *   `[x]` `/forgot-password`, `/reset-password` (API)
 54: *   **State Management:**
 55:     *   `[x]` (Test) Implement Zustand store (`src/store/authStore.ts`) to manage:
 56:         *   `[x]` Authentication token (`accessToken`).
 57:         *   `[x]` User information (basic profile, `is_premium` flag).
 58:         *   `[x]` Authentication status (`isAuthenticated`).
 59:     *   `[x]` Implement logic to securely store/retrieve token using `react-native-keychain`.
 60:     *   `[x]` Implement actions/logic in the store for `login`, `register`, `logout`.
 61: *   **Integration:**
 62:     *   `[x]` Connect Auth screens to API service functions and state management.
 63:     *   `[x]` Handle loading states and display errors from API responses.
 64:     *   `[x]` Implement navigation logic: navigate to Main App stack on successful login/register, navigate to Auth stack on logout or initial load if not authenticated.
 65:     *   `[x]` Write code for component tests for Auth screens, mocking navigation and API calls.
 66: 
 67: ---
 68: 
 69: ## Phase 3: Main App Shell & Basic Content Display (Free Tier) 
 70: *   **Navigation:**
 71:     *   `[x]` (UI) Implement main app navigation (e.g., Bottom Tab Navigator for Protocols, Notes (placeholder), Settings). — @Cline
 72:     *   `[x]` (UI) Implement stack navigators within tabs where needed (e.g., Protocol List -> Protocol Detail).
 73: *   **Screens:**
 74:     *   `[x]` (UI) Build Protocol List screen (`src/screens/Protocols/ProtocolListScreen.tsx`).
 75:     *   `[x]` (UI) Build Protocol Detail screen (`src/screens/Protocols/ProtocolDetailScreen.tsx`).
 76:     *   `[x]` (UI) Build Settings screen shell (`src/screens/Settings/SettingsScreen.tsx`).
 77: *   **API Service:**
 78:     *   `[x]` Implement API service functions (`src/services/api/content.ts`) for:
 79:         *   `[x]` Fetching protocols (`/protocols`) (API)
 80:         *   `[x]` Fetching protocol details (`/protocols/{id}`) (API)
 81: *   **Integration:**
 82:     *   `[x]` Fetch and display foundational protocol list/summaries on relevant screens.
 83:     *   `[x]` Handle navigation between list and detail views.
 84:     *   `[x]` Display loading/error states for content fetching.
 85:     *   `[ ]` (UI) Implement visual indicators/prompts for premium-only content/features .
 86:     *   `[ ]` Conditionally render limited content based on *backend API response* (backend determines free content).
 87: 
 88: ---
 89: 
 90: ## Phase 4: Subscription Flow (IAP Integration)
 91: 
 92: *   **IAP Setup:**
 93:     *   `[x]` Install `react-native-iap` and link native dependencies.
 94:     *   `[ ]` Configure products (Premium Monthly, Premium Annual) in App Store Connect and Google Play Console. Ensure IDs match backend `plans` table identifiers.
 95:     *   `[ ]` Implement platform-specific setup for `react-native-iap` (iOS capabilities, Android billing dependency).
 96: *   **API Service:**
 97:     *   `[x]` Implement API service functions (`src/services/api/billing.ts`) for:
 98:         *   `[x]` Fetching available plans (`/plans`) (API)
 99:         *   `[x]` Fetching current user subscription status (`/user/subscription`) (API)
100: *   **Screens:**
101:     *   `[x]` (UI) Build "Go Premium" / Subscription Offers screen. Display plans fetched from API.
102: *   **State Management:**
103:     *   `[x]` Add subscription status (`plan`, `status`, `ends_at`) to relevant store (`authStore` or dedicated `billingStore`).
104:     *   `[x]` Implement logic to periodically fetch/refresh subscription status from `/user/subscription` API.
105: *   **Integration:**
106:     *   `[x]` Use `react-native-iap` functions to:
107:         *   `[x]` Fetch product details (`getProducts`).
108:         *   `[x]` Initiate purchase flow (`requestSubscription`).
109:     *   `[x]` Handle IAP purchase results (success, failure, cancellation).
110:         *   *Note:* The primary validation happens backend via webhooks. Frontend may need to inform the backend "purchase initiated" or simply refresh user/subscription status after a short delay or upon app foregrounding to reflect changes validated by the backend. Discuss exact flow with backend team.
111:     *   `[x]` Display current subscription status on Settings screen.
112:     *   `[x]` Conditionally display "Upgrade" prompts or premium features based on subscription status from the state store.
113:     *   `[x]` Handle IAP initialization errors and loading states.
114:     *   `[x]` Write code for store logic related to subscription status.
115: 
116: ---
117: 
118: ## Phase 5: Premium Features (MVP Scope)
119: 
120: *   **Content Display:**
121:     *   `[x]` Enhance Protocol Detail screen to display *full summaries/details* if user state indicates premium (`authStore.user.is_premium` or `billingStore.isActive`). Fetch potentially richer data from `/protocols/{id}` API (API needs to return it for premium users).
122: *   **Custom Reminders:**
123:     *   `[x]` (UI) Build Reminder List screen (Premium only).
124:     *   `[x]` (UI) Build Create/Edit Reminder screen (Premium only).
125:     *   `[x]` Implement API service functions (`src/services/api/reminders.ts`) for CRUD:
126:         *   `[x]` `GET /reminders` (API)
127:         *   `[x]` `POST /reminders` (API)
128:         *   `[x]` `PUT /reminders/{id}` (API)
129:         *   `[x]` `DELETE /reminders/{id}` (API)
130:     *   `[x]` Fetch and display existing reminders.
131:     *   `[x]` Implement form for creating/editing reminders (selecting protocol, time).
132:     *   `[x]` Integrate screens with API calls, handling loading/error states.
133:     *   `[x]` Ensure Reminder screens/features are only accessible/visible to premium users.
134: 
135: ---
136: 
137: ## Phase 6: Push Notifications Setup
138: 
139: *   **Firebase Setup:**
140:     *   `[x]` Install `@react-native-firebase/app` and `@react-native-firebase/messaging`.
141:     *   `[ ]` Configure Firebase project (iOS/Android apps). Download and add config files (`GoogleService-Info.plist`, `google-services.json`). (SKIP FOR NOW)
142:     *   `[x]` Implement native setup for Firebase messaging (AppDelegate, Podfile, build.gradle changes).
143: *   **Token Handling:**
144:     *   `[x]` Implement logic to request user permission for notifications.
145:     *   `[x]` Implement logic to get the FCM device token using `@react-native-firebase/messaging`.
146:     *   `[x]` Implement API service function (`src/services/api/user.ts`) to send the token to the backend (`POST /api/user/device-token`) (API).
147:     *   `[x]` Send token to backend upon successful login or when the token refreshes.
148: *   **Notification Handling:**
149:     *   `[x]` Implement listeners for foreground notifications.
150:     *   `[x]` Implement listeners/setup for background/quit state notification handling.
151:     *   `[x]` Implement logic to display incoming reminder notifications (or let OS handle basic display).
152: 
153: ---
154: 
155: ## Phase 7: Refinement, Testing & QA (without test run, without app running, just code)
156: 
157: *   **Styling & Polish:**
158:     *   `[x]` (UI) Perform visual review across all screens. Adjust styles for consistency and pixel-perfection (within reason).
159:     *   `[x]` Ensure consistent loading indicators and empty states.
160:     *   `[x]` Ensure responsive layout handling on different screen sizes/orientations.
161: *   **Error Handling:**
162:     *   `[x]` Implement user-friendly display for API errors (e.g., toast messages, inline errors).
163:     *   `[ ]` Handle network connectivity issues gracefully.
164: *   **Testing:**
165: *   **Accessibility (A11y):**
166:     *   `[x]` Add appropriate `accessibilityLabel`, `accessibilityHint`, `accessibilityRole` props.
167:     *   `[x]` Check color contrast ratios.
168: *   **Performance:**
169: 
170: ---
171: 
172: ## Phase 8: Build & Deployment Preparation
173: 
174: *   **Configuration:**
175:     *   `[ ]` Configure app icons and splash screens.
176:     *   `[ ]` Configure build settings (version codes, bundle IDs, signing certificates) for iOS and Android release builds.
177:     *   `[ ]` Ensure environment variable configuration works correctly for different builds (staging, production pointing to correct API URLs).
178: *   **App Store Setup:**
179:     *   `[ ]` Create app listings in App Store Connect and Google Play Console.
180:     *   `[ ]` Prepare required metadata (descriptions, screenshots, privacy policy URL).
181: *   **Build & Test:**
182:     *   `[ ]` Generate release builds for iOS (`.ipa`) and Android (`.aab`).
183: 
184: ---
185: 
186: ## Phase 9: Launch & Post-Launch
187: 
188: *   **Release:**
189:     *   `[ ]` Submit builds to TestFlight (iOS) / Internal Testing (Android) for final QA.
190:     *   `[ ]` Submit builds for App Store / Google Play review.
191:     *   `[ ]` Coordinate release timing with backend team.
192: *   **Monitoring:**
193:     *   `[ ]` Integrate and configure crash reporting service (Sentry, Bugsnag).
194:     *   `[ ]` Monitor crash reports and user feedback post-launch.
195:     *   `[ ]` Address critical issues promptly via patches/updates.
````
