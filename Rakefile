NAME = 'portfolio'
PATH = '/webs/botanicus.me'

desc "Build the image."
task :build do
  sh "docker build -t #{NAME} ."
end

desc "Run the container."
task :run do
  sh "docker run -p 80:80 -v #{Dir.pwd}:#{PATH}:ro #{NAME}"
end

desc "Open the running site."
task :open do
  ip = %x{boot2docker ip}
  sh "open http://#{ip}"
end

desc "SSH into a running container."
task :ssh do
  id = %x{docker ps | grep #{NAME}:latest | awk '{ print $1 }'}.chomp
  sh "docker exec -it #{id} /bin/sh"
end

desc "Build and run the container."
task default: [:build, :run]
