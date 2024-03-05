import express from 'express';
import cors from 'cors';

import app from './app';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
