FROM node:latest
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

WORKDIR /frontend
COPY . ./frontend

EXPOSE 3000

CMD npm start