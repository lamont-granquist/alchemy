require 'sinatra'

class Alchemy < Sinatra::Base

  get '/favicon.png' do
    halt 404
  end

  get '/favicon.ico' do
    halt 404
  end

  get '/' do
    erb :index, :layout => false
  end

end
