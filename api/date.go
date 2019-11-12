package handler

import (
	"fmt"
	"net/http"
	"time"
)

// Handler returns the current time
func Handler(w http.ResponseWriter, r *http.Request) {
	layout := "Mon/3/4"
	currentTime := time.Now().Format(layout)
	fmt.Fprintf(w, currentTime)
}
