#
# io.js v2.2.1

apt_package "nodejs"
apt_package "npm"

link "/usr/bin/node" do
  to "/usr/bin/nodejs"
end

bash "io.js v2.2.1" do
  code <<-EOH
    npm install -g n
    n io 2.2.1
  EOH
  not_if { `node -v`.start_with?("v2.2.1") }
end

#
# Permissions

bash "Vagrant Permissions" do
  code "chown -R vagrant /usr/local"
end
