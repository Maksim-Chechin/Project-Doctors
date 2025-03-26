const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const FILE_PATH = "./data.json";

//  Загрузка данных
app.get("/data.json", (req, res) => {
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
        if (err) return res.status(500).send("Ошибка чтения файла!");
        res.json(JSON.parse(data || "[]")); // Если файл пустой, отправляем []
    });
});

//  Сохранение данных
app.post("/save", (req, res) => {
    fs.writeFile(FILE_PATH, JSON.stringify(req.body, null, 2), (err) => {
        if (err) return res.status(500).send("Ошибка сохранения файла!");
        res.send("Данные сохранены!");
    });
});

// Запуск сервера
app.listen(3000, () => console.log("Сервер запущен на http://localhost:3000"));
