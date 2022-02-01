# Lifepoints RN App

## Requirements:

**Node:** 12.6.0

**React Native:** 0.62

**Android SDK:** API Level 28

**JAVA SDK:** 11 LTS

**Install Application:** yarn install
**Run Application:** \$env:ENVFILE="/src/config/.env.dev"; react-native run-android

**When Android deployment fails, follow the commands:**
```
1. rm -rf android/.gradle
2. rm -rf .gradle
3. rm -rf ~/.gradle
4. ./gradlew clean
5. yarn droid-build-release
```
