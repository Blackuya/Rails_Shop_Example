require 'test_helper'

class CartControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get cart_update_url
    assert_response :success
  end

end
