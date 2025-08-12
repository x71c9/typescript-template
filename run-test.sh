#!/bin/bash

set -x

infisical run --env=dev -- yarn h src/test/$1 main

