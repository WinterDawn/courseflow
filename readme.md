docker build -t eluttner/courseflow:dev .

docker run -it -p 3000:8000 -v ${PWD}:/usr/src/app eluttner/courseflow:dev

docker run -it -p 3000:8000 -v ${PWD}:/usr/src/app eluttner/courseflow:dev /bin/bash