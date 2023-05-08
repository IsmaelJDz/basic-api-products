const express = require('express');
const cors = require('cors');

const data = {
  places: [
    {
      id: 1,
      name: 'Platos para Agua Comida para Perro, Gato, Mascota Eco-friendly Antideslizante Elevada Alimentación de Madera Acero Inoxidable Cuencos Alimentadores 1.5 Lt',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01ezx1kw7gftqdqgva8tacvdee/open-uri20210303-25404-15zyo0r_original.?1614808740',
      price: '111.88',
    },
    {
      id: 2,
      name: 'Juguete para Mascotas con Cuerda',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01eybpaycfm9pzr7yanpbvnebs/open-uri20210212-32620-1nok8g4_original.?1613152746',
      price: '28.82',
    },
    {
      id: 3,
      name: 'Abrigo de Invierno para Perro',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01eybpysax6zt0m6vfqbvvwrnq/open-uri20210212-32620-roqvbk_original.?1613153396',
      price: '138.46',
    },
    {
      id: 4,
      name: 'Seguridad en el Hogar Monitor de Audio para Bebés',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01eybqw1ce3s4tjdht78yjghe9/open-uri20210212-32620-1n1hjji_original.?1613154354',
      price: '331.43',
    },
    {
      id: 5,
      name: 'Cepillo de Dientes de Silicona de Doble Cara para Perros',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01eybpz3qayvrmp9wh09hh3608/open-uri20210212-32620-r1namb_original.?1613153407',
      price: '3.18',
    },
    {
      id: 6,
      name: 'Mini Cámara de seguridad inalámbrica, Wifi Calidad 1080P, Visión panorámica 360º Batería recargable, cámara con visión nocturna HD, detección de movimiento PIR, audio bidireccional.',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01f1gcdpd7344chejfbsgc55qz/camara%20ip_monitoreo_cover_original.jpg?1616531348',
      price: '565.19',
    },
    {
      id: 7,
      name: 'Bombilla Led inteligente wifi, Ahorro de energía, multicolor RGB +W. Smart lighting bulb. Wifi Smart bulb',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01f1gcecvqencpzc2w7tcbdxkq/smart_led_cover_original.jpg?1616531371',
      price: '114.42',
    },
    {
      id: 8,
      name: 'Super duper product with a short name 12',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01f2m5nvkkaxx9npr2sa5612gr/super_duper_product_with_a_short_name_12_cover_A4Z_original.jpg?1617732235',
      price: '3786.85',
    },
    {
      id: 9,
      name: 'Limpiador para Patas de Mascotas Portatil',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01eybptmep92pd004h5y6n2w1g/open-uri20210212-32620-170zpsc_original.?1613153260',
      price: '67.43',
    },
    {
      id: 10,
      name: 'Cable Hdmi  4K Ultra HD',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01eybqkt1yx3yq7vpnv91kvhf2/open-uri20210212-32620-1nzcaum_original.?1613154085',
      price: '11.45',
    },
    {
      id: 11,
      name: 'Eliminador De Pelo Mascotas\n\n',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01eybqxv90sxmtdwr1nvqq1jx3/open-uri20210212-32620-lk47nn_original.?1613154414',
      price: '45.92',
    },
    {
      id: 12,
      name: 'Camara de seguridad wifi 360 Grados camara de vigilancia inalambrica camara ip HD 1080P wifi monitor de bebe, visión nocturna por infrarrojos, audio bidireccional, detección de movimiento, Control remoto por Android/iOS App',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01f1gcc3vbch7zfm9km51dm4na/seguridad_cctv_cover_original.jpg?1616531297',
      price: '412.15',
    },
    {
      id: 13,
      name: 'Super duper product with a short name 7',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01f2m5hv6wgyd9nzrwgf2bt4s2/super_duper_product_with_a_short_name_7_cover_anQ_original.jpg?1617732104',
      price: '3786.85',
    },
    {
      id: 14,
      name: 'Organizador de Armario Colgante',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01eybpfsvt4dzvqrp2v4d5wwj4/open-uri20210212-32620-qrp9b3_original.?1613152905',
      price: '37.65',
    },
    {
      id: 15,
      name: 'Luz nocturna con sensor automático para el hogar inteligente para vestíbulo, sótano, garaje, baño, armario, cocina, escaleras',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01ezx1p5ssaezc5f1r77jt2rvm/open-uri20210303-25404-1iezniq_original.?1614808816',
      price: '61.71',
    },
    {
      id: 16,
      name: 'Monitor de Bebé con Cámara Full HD Wifi',
      cover:
        'https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01eybpm4h8ny707q7fb80beq0r/open-uri20210212-32620-c64b6t_original.?1613153047',
      price: '552.03',
    },
  ],
};

const app = express();

app.use(cors('*'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(data);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
