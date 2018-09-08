$(function() {

	const addNew = function () {
		$('.add-new__btn')
			.click(function(){
				let name = $('#nameInput').val();
				let description = $('#descriptionInput').val();
				if (name && description == 0) {
					alert('Заполните обязательные поля!');
					return false;
				}
				let newItem = $('<li class="todo-list__item">' + 
					'<div class="todo-list__item-name">' + 
					name + 
					'<span class="todo-list__item-details"><img src="img/arrow.png" alt="details"></span>' + 
					'<span class="todo-list__item-delete"><img src="img/delete.png" alt="delete"></span>' +
					'</div>' + 
					'<div class="todo-list__item-description">' + 
					description + 
					'</div>' + 
					'</li>');
				$('.add-new-form')[0].reset();
				if ($('.todo__empty').css('display') == 'block') {
					$('.todo__empty').hide();
				}
				$('.todo-list').prepend(newItem);
				$('.todo-list__item-details').off('click');
				$('.todo-list__item-delete').off('click');
				showDetails();
				deleteItem();
			});
	}

	const showDetails = function () {
		$('.todo-list__item-details').each(function(){
			$(this)
				.click(function(){
					let description = $(this).parents('.todo-list__item').children('.todo-list__item-description');
					console.log(description.text());
					if (description.css('display') == 'none') {
						description.show();
					} else {
						description.hide();
					}
				});
		});
	}

	const deleteItem = function () {
		$('.todo-list__item-delete').each(function(){
			$(this)
				.click(function(){
					console.log('click');
					$(this).parents('.todo-list__item').remove();
					if ($('.todo-list').children('li').length < 1) {
						$('.todo__empty').show();
					}
				});
		});
		
	}

	addNew();
	// showDetails();
	// deleteItem();
});