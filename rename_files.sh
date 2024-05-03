#!/bin/bash

ROOT_DIR="/Users/esbeninglev/Dropbox/Programming/Frontend/EjgilWestergaard/public/img"

# Find all files in the directory tree that contain 'å' in their names
find "$ROOT_DIR" -type f -name '*å*' | while read file; do
  # Compute new name by replacing 'å' with 'a'
  new_name=$(echo "$file" | sed 's/å/a/g')
  
  # Rename the file
  mv "$file" "$new_name"
  echo "Renamed $file to $new_name"
done