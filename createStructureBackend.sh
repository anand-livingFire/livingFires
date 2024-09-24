#!/bin/bash

mkdir -p backend/src/{auth,users,products,orders,banners,payment,config}

touch backend/Dockerfile

touch backend/src/auth/{auth.module.ts,auth.controller.ts,auth.service.ts,jwt.strategy.ts}
touch backend/src/users/{users.module.ts,users.controller.ts,users.service.ts}
touch backend/src/products/{products.module.ts,products.controller.ts,products.service.ts}
touch backend/src/orders/{orders.module.ts,orders.controller.ts,orders.service.ts}
touch backend/src/banners/{banners.module.ts,banners.controller.ts,banners.service.ts}
touch backend/src/payment/{payment.module.ts,payment.service.ts}
touch backend/src/config/config.service.ts
