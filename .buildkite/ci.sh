#!/bin/bash

# Init
set -euo pipefail

# Change current branch since git is currently a detached HEAD. This is required for gitversion to work
git checkout -B ${BUILDKITE_BRANCH}
git reset --hard

# Run gitversion, mounting the repo root folder. Export the result as BUILD_NUMBER
docker run -v "$(pwd):/repo" gittools/gitversion-dotnetcore:linux /repo
export BUILD_NUMBER=$(docker run -v "$(pwd):/repo" gittools/gitversion-dotnetcore:linux /repo | jq -r ".LegacySemVer")
export DOCKER_TAG="carbon:${BUILD_NUMBER}"
echo "+++ :package: Building version ${BUILD_NUMBER}"

# Build docker image
docker build -t ${DOCKER_TAG} --build-arg VERSION=${BUILD_NUMBER} --build-arg PUBLIC_URL=${PUBLIC_URL} .
