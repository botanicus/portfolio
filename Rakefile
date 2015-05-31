desc "Build the image."
task :build do
  sh "docker build -t portfolio ."
end

desc "Run the container."
task :run do
  sh "docker run -p 80:80 -v #{Dir.pwd}:/webs/botanicus.me:ro portfolio"
end

desc "SSH into a running container."
task :ssh do
  id = %x{docker ps | grep portfolio:latest | awk '{ print $1 }'}.chomp
  sh "docker exec -it #{id} /bin/sh"
end

desc "Build and run the container."
task default: [:build, :run]

desc "Publish the image."
task :publish do
  # TODO
end
