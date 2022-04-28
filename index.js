const express = require('express');
const app = new express();
const PORT = process.env.PORT || 4000;








app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
