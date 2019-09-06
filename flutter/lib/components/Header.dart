import 'package:flutter/material.dart';
import 'package:linkedin/components/Input.dart';

//MediaQuery.of(context).size.height

class Header extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Color(0xFF0E76A8),
      ),
      height: MediaQuery.of(context).size.height * 0.08,
      width: MediaQuery.of(context).size.width,
      child: Padding(
        padding: const EdgeInsets.only(
          left: 10,
          right: 10,
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Container(
              width: MediaQuery.of(context).size.height * 0.06,
              height: MediaQuery.of(context).size.height * 0.06,
              decoration: new BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
              ),
            ),
            Input(),
            Icon(
              IconData(57527, fontFamily: 'MaterialIcons'),
              color: Colors.white,
              size: 40,
            ),
          ],
        ),
      ),
    );
  }
}
