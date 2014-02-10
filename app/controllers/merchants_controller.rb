class MerchantsController < ApplicationController


  def index

  end

  def show
    
  end

  def new
    @merchant = Merchant.new
  end

  def create
    @merchant = Merchant.create(merchant_params)

    respond_to do |format|
      if @merchant.save
      format.html {}
      format.js {}
      format.json {render :json => {:success => true}}
      end

    end
  end

  private

  def merchant_params
    params.require(:merchant).permit(:email, :phone, :merch_id, :processor, :terminal_id)
  end

end
