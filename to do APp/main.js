window.onload = function () {
  // verifie si le navigateur support localStorage
  if (localStorage) {
    document
      .getElementById("task-count")
      .addEventListener("submit", function () {
        var taskName = document.getElementById("task-input").value;
        var taskDate = document.getElementById("date-input").value;
        var taskPrio = document.getElementById("priority-select").value;

        //enregistrer dans localStorage
        localStorage.setItem("Tache:", taskName);
      });
  }

  //recupere
  var taskName = localStorage.getItem("task-input");
  document.getElementById("container").innerHTML = "Tache:" + taskName;
};
