const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

// Connect cors to port  
app.arguments(express.json());
app.use(cors());

// Initialise database
