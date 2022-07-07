#!/bin/bash
yarn lint:fix
git add .
git commit -m "fix"
git push