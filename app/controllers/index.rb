get '/' do

  @grandma = params[:grandma]
   erb :index

end

post '/grandma' do
  p params
  if params[:user_input] == params[:user_input].upcase
    @grandma = params[:user_input] 
  else
    @grandma = "Speak up, kiddo!" 
  end
  # erb :index
  erb :grandma_response, layout: false
end
