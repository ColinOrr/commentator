#
# Permissions

directory "/usr/local" do
  owner "vagrant"
end

#
# Node JS 0.11

apt_package "nodejs"
apt_package "npm"

link "/usr/bin/node" do
  to "/usr/bin/nodejs"
end

bash "Node 0.11" do
  code <<-EOH
    npm install -g n
    n 0.11
  EOH
  not_if { `node -v`.start_with?("v0.11") }
end
