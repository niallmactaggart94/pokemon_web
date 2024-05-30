FROM node:20-alpine
WORKDIR /test
RUN echo '#!/usr/bin/env sh' > /runcall
RUN echo 'if [ $1 ]; then npm $@; else echo "Pass parameter test to run tests"; fi' >> /runcall
RUN chmod +x /runcall

ENTRYPOINT ["/runcall"]
