rm -rf /home/cert/git/hi-ut.github.io/
cd /home/cert/git/
git clone https://github.com/hi-ut/hi-ut.github.io.git
cd /home/cert/git/hi-ut.github.io/
npm install
npm run generate:production
cp -rp /home/cert/git/hi-ut.github.io/dist/* /web/httpd/siryo/dev/
rm -rf /home/cert/git/hi-ut.github.io/
cd /home/cert/