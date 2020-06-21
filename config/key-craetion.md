
openssl rsa -in private.key -pubout -outform PEM -out public.pub
ssh-keygen -t rsa -b 4096 -m PEM -f private.key

https://gist.github.com/ygotthilf/baa58da5c3dd1f69fae9