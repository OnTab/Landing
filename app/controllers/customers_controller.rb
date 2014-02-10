class CustomersController < ApplicationController

  def index

  end

  def show
    
  end

  def new
    @customer = Customer.new
  end

  def create
    @customer = Customer.create(customer_params)

    respond_to do |format|
      if @customer.save
      format.html {}
      format.js {}
      format.json {render :json => {:success => true}}
      end

    end
  end

  private

  def customer_params
    params.require(:customer).permit(:email, :name)
  end
end
