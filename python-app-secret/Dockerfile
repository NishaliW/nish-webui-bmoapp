FROM oraclelinux:8.7
LABEL name="nishali"
RUN yum install python3 -y
WORKDIR /bmo/nishali/

COPY myapp.py .
RUN useradd nishali
USER nishali
CMD [ "python3", "myapp.py" ]