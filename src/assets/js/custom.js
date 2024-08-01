$(document).ready(function () {
        cartload();


    function cartload()
    {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            url: '/load-cart-data',
            method: "GET",
            success: function (response) {
                $('.basket-item-count').html('');
                var parsed = jQuery.parseJSON(response)
                var value = parsed; //Single Data Viewing
                $('.basket-item-count').append($('<span class="badge badge-pill red">'+ value['totalcart'] +'</span>'));
            }
        });
    }
    
        // Delete Cart Data
    $(document).ready(function () {

        $('.delete_cart_data').click(function (e) {
            e.preventDefault();
            
           

             var product_id = $(this).closest(".cartpage").find('.product_id').val();
            //  alert(product_id);
            var data = {
                '_token': $('input[name=_token]').val(),
                "product_id": product_id,
            };

            // $(this).closest(".cartpage").remove();

            $.ajax({
                url: '/delete-from-cart/',
                type: 'DELETE',
                data: data,
                success: function (response) {
                window.location.reload();
                alertify.set('notifier','position','top-right');
                alertify.success(response.status);
                }
            });
        });

    });
    
        // Clear Cart Data
    $(document).ready(function () {

        $('.clear_cart').click(function (e) {
            e.preventDefault();

            $.ajax({
                url: '/clear-cart/',
                type: 'GET',
                success: function (response) {
                    window.location.reload();
                    alertify.set('notifier','position','top-right');
                    alertify.success(response.status);
                }
            });

        });

    });

// Add to Cart Code
        $('.add-to-cart-btn').click(function (e) {
            e.preventDefault();

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            var product_id = $(this).closest('.product_data').find('.product_id').val();
            
            var product_name = $(this).closest('.product_data').find('.product_name').val();
            
            var product_image = $(this).closest('.product_data').find('.product_image').val();
            
            var product_size = $(this).closest('.product_data').find('.product_size').val();
            
            var product_material = $(this).closest('.product_data').find('.product_material').val();
            
            var product_finish = $(this).closest('.product_data').find('.product_finish').val();
            
            var product_side = $(this).closest('.product_data').find('.product_side').val();
            
            var product_ink = $(this).closest('.product_data').find('.product_ink').val();
            
            var product_quantity = $(this).closest('.product_data').find('.product_quantity').val();
            
            var product_file = $(this).closest('.product_data').find('.product_file').val();
            
            var product_subtotal = $(this).closest('.product_data').find('.product_subtotal').val();
            
            // alert(product_name);
            $.ajax({
                url: "/add-to-cart",
                method: "POST",
                data: {
                    'product_name': product_name,
                    'product_id': product_id,
                    'product_image': product_image,
                    'product_size': product_size,
                    'product_material': product_material,
                    'product_finish': product_finish,
                    'product_side': product_side,
                    'product_ink': product_ink,
                    'product_quantity': product_quantity,
                    'product_file': product_file,
                    'product_subtotal': product_subtotal
                },
                success: function (response) {
                    alertify.set('notifier','position','bottom-right');
                    alertify.success(response.status);
                },
            });
        });
    });