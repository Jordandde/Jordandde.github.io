package handler

import (
	"fmt"
	"net/http"
	"time"
)

// Handler returns the current time
func Handler(w http.ResponseWriter, r *http.Request) {
	layout := "Mon/3"
	loc, _ := time.LoadLocation("EST")
	currentTime := time.Now().In(loc).Format(layout)
	fmt.Fprintf(w, currentTime)
}
