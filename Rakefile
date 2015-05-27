task :build do
  sh "docker build -t portfolio ."
end

task :run do
  sh "docker run -p 80:80 -v #{Dir.pwd}:/webs/101ideas.cz portfolio"
end

task :ssh do
  id = %x{docker ps | grep portfolio:latest | awk '{ print $1 }'}.chomp
  sh "docker exec -it #{id} /bin/bash"
end

task default: [:build, :run]
