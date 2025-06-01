document.getElementById('mealQuiz').addEventListener('submit', function (e) {
  e.preventDefault();
  const goal = document.getElementById('goal').value;
  const time = document.getElementById('time').value;
  let msg = '';

  if (goal == 'muscle' && time == 'breakfast') {
    msg = 'Egg white omelet with toast and avocado.';
  } else if (goal == 'muscle' && time == 'lunch') {
    msg = 'Grilled chicken, quinoa, and veggies.';
  } else if (goal == 'muscle' && time == 'dinner') {
    msg = 'Salmon, sweet potato, and broccoli.';
  } else if (goal == 'weight' && time == 'breakfast') {
    msg = 'Greek yogurt, berries, and chia seeds.';
  } else if (goal == 'weight' && time == 'lunch') {
    msg = 'Tuna salad with olive oil.';
  } else if (goal == 'weight' && time == 'dinner') {
    msg = 'Zucchini noodles with turkey.';
  } else if (goal == 'energy' && time == 'breakfast') {
    msg = 'Oatmeal, banana, peanut butter, honey.';
  } else if (goal == 'energy' && time == 'lunch') {
    msg = 'Brown rice, tofu, stir-fry veggies.';
  } else if (goal == 'energy' && time == 'dinner') {
    msg = 'Lentil soup with whole grain bread.';
  }

  document.getElementById('mealResult').innerHTML = '<summary>' + msg + '</summary>';
});