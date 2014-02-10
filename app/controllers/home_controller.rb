class HomeController < ApplicationController

  def index
    @customer = Customer.new
    @merchant = Merchant.new
  end
end
