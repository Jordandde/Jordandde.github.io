package dates

import (
	"fmt"
	"net/http"
	"time"
	"github.com/Jordandde/create-react-app-functions/api/handler"
)

// ScheduleHandler returns whether I am free or not.
func ScheduleHandler(w http.ResponseWriter, r *http.Request) {
	currentTime := time.Now().Format(time.RFC850)
	fmt.Fprintf(w,currentTime)
}