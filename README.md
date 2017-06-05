# spring-boot-angular

This example project shows how to setup a [Spring Boot](https://projects.spring.io/spring-boot/) application with [Angular](https://angular.io/) (not [AngularJS](https://angularjs.org/)!) using a [Maven](https://maven.apache.org/) build.


## Goals & Advantages

- Backend and frontend in one project
- Single toolchain over maven
- Hot-deployments of backend and frontend during development
- Use angular-cli for achieving best-practices 


## Prerequisites

- JDK 8
- Maven 
- Node with NPM
-- [angular-cli](https://github.com/angular/angular-cli)


## Usage

- Clone repo
- Run mvn build
- Run 'ng build --watch' in the 'angular-ui' dir
- Start spring application 'com.example.MyApplication'


## Step-by-Step

- Setup your preferred maven project layout. I used a multi-module project, having the spring app and the angular ui as modules.
- Setup a basic [Spring Boot](https://projects.spring.io/spring-boot/) app.
-- Add maven dependency for org.springframework.boot:spring-boot-devtools for hot-deployments
- Setup UI module
-- Run angular-cli to create a new UI project stub (ng new <name>) and copy the created files to the maven ui module
-- Create folder /src/ngapp and move all files below /src which where created by angular-cli to there
-- Fix paths in ./angular-cli.json, ./tsconfig.json, ./src/ngapp/tsconfig.*.json. Change /src to /src/ngapp and /dist to /target/classes/public
-- Update maven pom and include /src/ngapp as source-folder and configure [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)
- Add the angular-ui jar as dependency to the spring-boot-app module

