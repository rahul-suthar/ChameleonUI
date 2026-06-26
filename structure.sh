#!/bin/bash
find . \
-path '*/node_modules' -prune -o \
-path './.next' -prune -o \
-path '*/.git' -prune -o \
-print