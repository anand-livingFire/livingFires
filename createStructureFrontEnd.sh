#!/bin/bash

# Define the base directory
BASE_DIR="./frontend/src"

# Check if the src directory exists
if [ -d "$BASE_DIR" ]; then
    echo "src folder exists, creating directory structure..."

    # Create the folder structure
    mkdir -p "$BASE_DIR/components/Auth"
    mkdir -p "$BASE_DIR/components/Products"
    mkdir -p "$BASE_DIR/components/Orders"
    mkdir -p "$BASE_DIR/redux/actions"
    mkdir -p "$BASE_DIR/redux/reducers"
    mkdir -p "$BASE_DIR/pages"
    mkdir -p "$BASE_DIR/api"
    mkdir -p "$BASE_DIR/utils"

    # Create the files
    touch "$BASE_DIR/components/Auth/LoginForm.js"
    touch "$BASE_DIR/components/Products/ProductList.js"
    touch "$BASE_DIR/components/Products/ProductForm.js"
    touch "$BASE_DIR/redux/store.js"
    touch "$BASE_DIR/redux/actions/authActions.js"
    touch "$BASE_DIR/redux/actions/productActions.js"
    touch "$BASE_DIR/redux/reducers/authReducer.js"
    touch "$BASE_DIR/redux/reducers/productReducer.js"
    touch "$BASE_DIR/pages/Login.js"
    touch "$BASE_DIR/pages/Dashboard.js"
    touch "$BASE_DIR/pages/Products.js"
    touch "$BASE_DIR/App.js"
    touch "$BASE_DIR/api/authApi.js"
    touch "$BASE_DIR/api/productApi.js"
    touch "$BASE_DIR/utils/authHeader.js"

    # Create top-level files
    touch "./frontend/Dockerfile"
    touch "./frontend/package.json"
    touch "./frontend/.env"

    echo "Directory structure and files created successfully."
else
    echo "src folder does not exist. Please create the frontend/src folder first."
fi
