import 'package:flutter/material.dart';

class Input extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.only(
          left: 10,
          right: 10,
        ),
        child: Container(
          height: MediaQuery.of(context).size.height * 0.06,
          child: TextFormField(
            // textAlign: TextAlign.center,
            style: TextStyle(fontSize: 14),
            decoration: InputDecoration(
              filled: true,
              fillColor: Colors.white,
              hintText: 'Pesquisar',
              contentPadding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(6),
              ),
              prefixIcon: Icon(
                IconData(57527, fontFamily: 'MaterialIcons'),
                size: 22,
              ),
            ),
            autofocus: false,
            maxLines: 1,
            keyboardType: TextInputType.text,
          ),
        ),
      ),
    );
  }
}
