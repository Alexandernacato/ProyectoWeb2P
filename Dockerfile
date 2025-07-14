# Etapa 1: Build Angular
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Nginx para servir Angular
FROM nginx:alpine

# Copia la app Angular compilada
COPY --from=builder /app/dist/EmpresaSoftware/browser /usr/share/nginx/html

# (Opcional) Configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
